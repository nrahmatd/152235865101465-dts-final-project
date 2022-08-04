import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../../firebase.config';
import React, { useState } from 'react';
import { useStateValue } from 'context/StateProvider';
import { actionType } from 'context/reducer';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from 'assets/icons/loading';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [{ user }, dispatch] = useStateValue();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginWithCredentials = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!user) {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          setLoading(false);
          const { user } = userCredential;
          dispatch({
            type: actionType.SET_USER,
            user: user?.providerData[0],
          });
          localStorage.setItem('user', JSON.stringify(user?.providerData[0]));

          navigate('/', { replace: true });
        })
        .catch((error) => {
          setLoading(false);
          const errorMessage = error.message;
          toast.error(errorMessage, {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              fontSize: '12px',
            },
          });
        });
    }
    return;
  };

  return (
    <section className='grid place-items-center'>
      <div className='container py-0 px-0 h-full min-h-[95vh]'>
        <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <div className=''>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='px-4 md:px-0'>
                  <div className='md:p-12 md:mx-6 pt-8'>
                    <div className='text-center'>
                      <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                        Catalog <span className='text-blue-500'>Games</span>{' '}
                        2022
                      </h4>
                    </div>

                    <Toaster />
                    <form onSubmit={loginWithCredentials}>

                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          id='email'
                          placeholder='Email'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          id='password'
                          placeholder='Password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className='text-center pt-1 pb-1'>
                        <button
                          className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          data-mdb-ripple='true'
                          data-mdb-ripple-color='light'
                          style={{
                            background:
                              'linear-gradient(to right, #3498DB,#2980B9, #34495E,#2C3E50)',
                          }}
                          disabled={loading}
                        >
                          {loading && <LoadingIcon />} Masuk
                        </button>
                      </div>
                      <div className='text-center pt-1 pb-1'>
                        <button
                          className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          data-mdb-ripple='true'
                          data-mdb-ripple-color='light'
                          style={{
                            background:
                              'linear-gradient(to right, #3498DB,#2980B9, #34495E,#2C3E50)',
                          }}
                          disabled={loading}
                          onClick={() => navigate("/register")}
                        >Daftar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
