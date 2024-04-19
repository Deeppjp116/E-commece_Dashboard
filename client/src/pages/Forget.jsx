import React, { useState, useRef, useContext, useEffect } from 'react';
import { forgetOTP, forgetemail } from '../features/forgetpassword';
import { useSelector } from 'react-redux';

const Forget = () => {
  //   const { email, otp, setPage } = useContext(RecoveryContext);
  const [timerCount, setTimer] = useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  const email = useSelector(forgetemail);
  const otp = useSelector(forgetOTP);

  console.log(email);

  async function resendOTP() {
    if (disable) return;

    try {
      const response = await axios.post(
        'http://localhost:9999/auth0/login/forget-password',
        { OTP: otp, recipient_email: email }
      );

      // Handle successful response (if applicable)
      // You might want to check the response data for success messages or codes
      console.log('OTP request successful:', response.data); // Example logging

      setDisable(true);
      setTimer(60);

      // Display success message using a more robust method (e.g., state management with a toast component)
      alert('A new OTP has successfully been sent to your email.');
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle errors appropriately (e.g., display error message to the user)
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  function verfiyOTP() {
    if (parseInt(OTPinput.join('')) === otp) {
      setPage('reset');
      return;
    }
    alert(
      'The code you have entered is not correct, try again or re-send the link'
    );
    return;
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gray-50'>
      <div className='bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl'>
        <div className='mx-auto flex w-full max-w-md flex-col space-y-16'>
          <div className='flex flex-col items-center justify-center text-center space-y-2'>
            <div className='font-semibold text-3xl'>
              <p>Email Verification</p>
            </div>
            <div className='flex flex-row text-sm font-medium text-gray-400'>
              <p>We have sent a code to your email to {email} </p>
            </div>
          </div>

          <div>
            <form>
              <div className='flex flex-col space-y-16'>
                <div className='flex flex-row items-center justify-between mx-auto w-full max-w-xs'>
                  <div className='w-16 h-16 '>
                    <input
                      maxLength='1'
                      className='w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700'
                      type='text'
                      name=''
                      id=''
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className='w-16 h-16 '>
                    <input
                      maxLength='1'
                      className='w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700'
                      type='text'
                      name=''
                      id=''
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          e.target.value,
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className='w-16 h-16 '>
                    <input
                      maxLength='1'
                      className='w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700'
                      type='text'
                      name=''
                      id=''
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          e.target.value,
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className='w-16 h-16 '>
                    <input
                      maxLength='1'
                      className='w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700'
                      type='text'
                      name=''
                      id=''
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    ></input>
                  </div>
                </div>

                <div className='flex flex-col space-y-5'>
                  <div>
                    <a
                      onClick={() => verfiyOTP()}
                      className='flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm'
                    >
                      Verify Account
                    </a>
                  </div>

                  <div className='flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500'>
                    <p>Didn't recieve code?</p>{' '}
                    <a
                      className='flex flex-row items-center'
                      style={{
                        color: disable ? 'gray' : 'blue',
                        cursor: disable ? 'none' : 'pointer',
                        textDecorationLine: disable ? 'none' : 'underline',
                      }}
                      onClick={() => resendOTP()}
                    >
                      {disable ? `Resend OTP in ${timerCount}s` : 'Resend OTP'}
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
