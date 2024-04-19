import { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
  forgetPasswordEmail,
  forgetPasswordOTP,
} from '../features/forgetpassword';

function Login() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [gettingData, setgettingData] = useState({});
  const [showAlert, setShowAlert] = useState();
  const [alert, setAlert] = useState('');
  const [mailValidation, setMailValidation] = useState();

  const navigate = useNavigate();

  const loginData = {
    username: formData.username,
    password: formData.password,
    email: formData.email,
  };

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  dispatch(forgetPasswordEmail(formData.email));

  const submitData = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(formData.email)) {
      setMailValidation(false);
    } else {
      try {
        const response = await axios.post(
          'http://localhost:9999/auth0/login',
          loginData
        );
        setMailValidation(true);

        if (response.status === 200) {
          // Successful login
          const { token } = response.data; // Assuming response contains a JWT token

          // Store JWT token in local storage (or a more secure solution)
          localStorage.setItem('jwtToken', token);

          // Handle successful login (e.g., redirect to protected routes)
          console.log('Login successful, token:', token);
          setAlert('success');
          setShowAlert(true);
          // navigate('/ecommerce');

          // Optional: Update Redux state with user information (if applicable)
          // dispatch(setUser(response.data.user)); // Assuming a setUser action
        } else {
          setAlert('error');
          setShowAlert(true);
        }

        console.log(response.data.username);
        setgettingData(response);
        console.log(response);
      } catch (error) {
        console.error(error);
        setAlert('error');
        setShowAlert(true);
      }
    }
  };
  async function navigateToOtp() {
    if (!formData.email) {
      return alert('Please enter your email');
    }

    // Generate a random OTP
    const OTP = Math.floor(Math.random() * 9000 + 1000);
    console.log(OTP);

    try {
      // Dispatch OTP to state (assuming forgetPasswordOTP is a state update action)
      dispatch(forgetPasswordOTP(OTP));

      // Send OTP request to server
      const response = await axios.post(
        'http://localhost:9999/auth0/forget-password',
        { OTP, recipient_email: formData.email }
      );

      // Handle successful response (if applicable)
      // You might want to check the response data for success messages or codes
      console.log('OTP request successful:', response.data);
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle errors appropriately (e.g., display error message to the user)
    }
  }

  return (
    <div className=' from-blue-400 to-purple-500 flex justify-center items-center h-screen bg-login-pattern bg-center bg-no-repeat bg-cover'>
      <div className='backdrop-filter backdrop-blur-sm bg-slate-400 bg-opacity-40 border border-blue-500 rounded-2xl ring-2 ring-white p-4 mx-4 max-w-sm w-full'>
        <h1 className='text-3xl font-semibold text-center text-black mb-4'>
          Login
        </h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-black font-bold'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              className='w-full px-4 py-2 rounded-md bg-white bg-opacity-25 text-black focus:outline-none focus:bg-opacity-50'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-black font-bold'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              className='w-full px-4 py-2 rounded-md bg-white bg-opacity-25 text-black focus:outline-none focus:bg-opacity-50'
              onChange={handleChange}
              required
            />
          </div>
          <div className='md-4'>
            <label htmlFor='password' className='block text-black font-bold'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              className='w-full px-4 py-2 rounded-md bg-white bg-opacity-25 text-black focus:outline-none focus:bg-opacity-50'
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className='mt-5'>
          <button
            type='button'
            onClick={submitData}
            className='w-full py-2 bg-stone-300 text-black rounded-md hover-bg-blue-600 transition duration-300 mb-3'
          >
            Login
          </button>
        </div>

        <Link to='forget-password' onClick={() => navigateToOtp()}>
          Forget Password
        </Link>
        {alert === 'success' && (
          <Alert severity='success' onClose={() => setShowAlert(false)}>
            <AlertTitle>Success</AlertTitle>
            User exists in the database - {formData.username}
          </Alert>
        )}
        {alert === 'error' && (
          <Alert severity='error' onClose={() => setShowAlert(false)}>
            <AlertTitle>Faild</AlertTitle>
            User not exists in the database
          </Alert>
        )}
        {mailValidation === false && (
          <Alert severity='error' onClose={() => setShowAlert(false)}>
            <AlertTitle>Faild</AlertTitle>
            Invalid Email
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Login;
