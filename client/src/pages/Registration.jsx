import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function Registration() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [gettingData, setgettingData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const submitData = async () => {
    try {
      console.log('Before axios request');
      const response = await axios.post(
        'http://localhost:3000/auth0/registration',
        formData
      );
      console.log('After axios request');
      console.log('datasened', response.data);
      setgettingData(response);
      navigate('/ecommerce');

      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);

        // You can also store user information if needed
        localStorage.setItem('user', JSON.stringify(response.data.user));

        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=' from-blue-400 to-purple-500 flex justify-center items-center h-screen bg-login-pattern bg-center bg-no-repeat bg-cover'>
      <div className='backdrop-filter backdrop-blur-sm bg-slate-400 bg-opacity-40 border border-blue-500 rounded-2xl ring-2 ring-white p-4 mx-4 max-w-sm w-full'>
        <h2 className='text-3xl font-semibold text-center text-black mb-4'>
          Registration
        </h2>
        <div>
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
        </div>
        <button
          type='button'
          onClick={submitData}
          className='w-full py-2 bg-stone-300 text-black rounded-md hover:bg-blue-600 transition duration-300 mb-3'
        >
          Register
        </button>
        {showAlert && (
          <Alert severity='success' onClose={() => setShowAlert(false)}>
            <AlertTitle>Success</AlertTitle>
            User has been registered successfully - {formData.username}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Registration;
