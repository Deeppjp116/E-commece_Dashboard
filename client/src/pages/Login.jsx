import { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [gettingData, setgettingData] = useState({});
  const [showAlert, setShowAlert] = useState();
  const [alert, setAlert] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const submitData = async (e) => {
    console.log('Button Clicked');
    try {
      const response = await axios.post(
        'http://localhost:9999/auth0/login',
        formData
      );
      console.log(response.data.username);
      setgettingData(response);
      console.log(response);

      if (formData.username === response.data.username) {
        setShowAlert(true);
        setAlert('success');
      } else {
        setAlert('error');
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        {showAlert ? (
          <Alert severity='success' onClose={() => setShowAlert(false)}>
            <AlertTitle>Success</AlertTitle>
            User exists in the database - {formData.username}
          </Alert>
        ) : (
          <Alert severity='error' onClose={() => setShowAlert(false)}>
            <AlertTitle>Faild</AlertTitle>
            User not exists in the database
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Login;
