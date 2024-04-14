import { useEffect, useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showAlert, setShowAlert] = useState();
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log('Button Clicked');

    // Check for empty fields
    if (!formData.username || !formData.password) {
      setAlert('error'); // Set error if fields are empty
      console.error('Username or password is empty!');
      return; // Prevent sending request if fields are empty
    }
    try {
      const response = await axios.post(
        'http://localhost:9999/auth0/login',
        formData
      );
      console.log(response.data); // Log response for debugging

      setShowAlert('success');
      setAlert('success'); // Update alert for successful login
    } catch (error) {
      if (error.response) {
        console.error('Server responded with error:', error.response.data);
        setAlert('error'); // Update alert for server errors
      } else if (error.request) {
        console.error('Network error:', error.request);
        setAlert('error'); // Update alert for network errors
      } else {
        console.error('Error:', error.message);
        setAlert('error'); // Update alert for other errors
      }
    }
  };

  // Handle state updates after response is received
  useEffect(() => {
    if (alert === 'success') {
      navigate('/');
      setShowAlert('success');
      // Perform actions if login is successful (e.g., redirect)
      console.log('Login successful!');
      // You can use `history.push('/dashboard')` or similar for redirection
    } else if (alert === '') {
    } else {
      setShowAlert('faild');
      // Optionally show an error message or handle failed login attempts
    }
  }, [alert]); // Re-run useEffect only when alert changes
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
              className='w-full px-4 py-2 rounded-md bg-white bg-opacity-25 text-black focus:outline-none focus:bg-opacity-50'
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <button
          type='button'
          onClick={submitData}
          className='w-full py-2 bg-stone-300 text-black rounded-md hover-bg-blue-600 transition duration-300 mb-3'
        >
          Login
        </button>
        {showAlert && // Only render alert if showAlert is set
          (showAlert === 'success' ? (
            <Alert severity='success' onClose={() => setShowAlert(null)}>
              <AlertTitle>Success</AlertTitle>
              User exists in the database - {formData.username}
            </Alert>
          ) : (
            <Alert severity='error' onClose={() => setShowAlert(null)}>
              <AlertTitle>Error</AlertTitle>
              {alert === 'empty'
                ? 'Username or password is empty!'
                : 'Login failed!'}
            </Alert>
          ))}
      </div>
    </div>
  );
}

export default Login;