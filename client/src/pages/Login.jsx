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
  const [showAlert, setShowAlert] = useState(false); // Combined state for alert visibility
  const [alertType, setAlertType] = useState(''); // Type of alert (success, error)
  const [alertMessage, setAlertMessage] = useState(''); // Specific message for alert
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = () => {
    return emailRegex.test(formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      setAlertType('error');
      setAlertMessage('Invalid Email');
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:9999/auth0/login',
        formData
      );

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('jwtToken', token);
        console.log('Login successful, token:', token);
        setAlertType('success');
        setAlertMessage('Login Successful');
        setShowAlert(true);
        navigate('/ecommerce'); // Assuming protected route

        // Optional: Update Redux state with user information
      } else {
        setAlertType('error');
        setAlertMessage('Login Failed');
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
      setAlertType('error');
      setAlertMessage('Login Error');
      setShowAlert(true);
    }
  };

  const handleForgetPassword = async () => {
    if (!formData.email) {
      alert('Please enter your email');
      return;
    }

    const OTP = Math.floor(Math.random() * 9000 + 1000);
    console.log(OTP);

    try {
      dispatch(forgetPasswordOTP(OTP));
      await axios.post('http://localhost:9999/auth0/forget-password', {
        OTP,
        recipient_email: formData.email,
      });
      console.log('OTP request successful'); // Consider user feedback on success
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle errors appropriately (e.g., display error message to the user)
    }
  };

  return (
    <div className=' from-blue-400 to-purple-500 flex justify-center items-center h-screen bg-login-pattern bg-center bg-no-repeat bg-cover'>
      <div className='backdrop-filter backdrop-blur-sm bg-slate-400 bg-opacity-40 border border-blue-500 rounded-2xl ring-2 ring-white p-4 mx-4 max-w-sm w-full'>
        <h1 className='text-3xl font-semibold text-center text-black mb-4'>
          Login
        </h1>
        <form onSubmit={handleSubmit}>
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
          <div className='mb-4'>
            <label htmlFor='email' className='block text-black font-bold'>
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
          <button
            type='submit'
            className='w-full py-2 bg-stone-300 text-black rounded-md hover:bg-blue-600 transition duration-300 mb-3'
          >
            Login
          </button>
        </form>
        <div className='mt-5 flex justify-between'>
          <Link to='forget-password' onClick={handleForgetPassword}>
            Forget Password
          </Link>
          {showAlert && (
            <Alert severity={alertType} onClose={() => setShowAlert(false)}>
              <AlertTitle>
                {alertType === 'success' ? 'Success' : 'Error'}
              </AlertTitle>
              {alertMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
