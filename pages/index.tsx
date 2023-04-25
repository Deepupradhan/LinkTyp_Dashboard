import { useContext, useState } from 'react';
import axios from 'axios';
import router, { useRouter } from 'next/router';
import { BsGoogle, BsArrowRight, BsPhoneFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { UserContext } from './UserContext';




export default function Home(props:any) {
  const { setUserData } = useContext(UserContext);

  
  
  //Show Tosat Message on login error message "invalid email or password"
    const LoginSuccessNotification = () => {
    toast('Login Successful', { hideProgressBar: true, autoClose: 1000, type: 'success' })
  }

  const LoginErrorNotification = () => {
    toast('Wrong Email or Password', { hideProgressBar: true, autoClose: 1000, type: 'error' })
  }

  //Login Form Validation and Error Handling Code Declaration Start Here
  const [Loginemail, setLoginEmail] = useState('');
  const [Loginpassword, setLoginPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  //  const [LoginError, setLoginError] = useState({});

  const validateLoginEmail = (Loginemail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(Loginemail);
  };

const loginFormSubmit = (e: any) => {
      e.preventDefault();
      console.log(Loginemail, Loginpassword);
      if (validateLoginEmail(Loginemail)) {
        setEmailError('');
        const data = {
          email: Loginemail,
          password: Loginpassword,
        };
        
        axios
          .post('https://api.linktyp.com/api/login', data)
          .then((res) => {
            // console.log(res);
            console.log(res.data.status);
            if (res.data.status === true) {
              console.log(res.data.access_token);
              // localStorage.setItem('access_token', res.data.access_token);
              // Cookies.set('access_token', res.data.access_token);
              Cookies.set('access_token', res.data.access_token, { expires: 7 });
              // Cookies.set('access_token',  res.data.access_token, { expires: 30, sameSite: 'none', secure: true });
              axios.get('https://api.linktyp.com/api/getdata', {
                
                headers: {
                  Authorization: `Bearer ${res.data.access_token}`
                }
              })
                .then((res) => {
                  console.log(res.data);
                  // push data to Home page with router.push
                  setUserData(res.data);
                  router.push('/DashBoard');
                })
                .catch((err) => {
                  console.log(err);
                  // handle error
                });

              console.log('Login Successful');
              LoginSuccessNotification();
            } else {
              // console.log('Login Failed');
              // setLoginError('Invalid Email or Password');
            }
          })
          .catch((err) => {
            console.log(err);
            LoginErrorNotification();
          });
      }
      else {
        console.log('Invalid Address')
        setEmailError('Invalid Email Address');
      }
    }

  //Register Form Validation and Error Handling Code Declaration Start Here
  const [Registerusername, setRegisterUsername] = useState('');
  const [Registeremail, setRegisterEmail] = useState('');
  const [Registerpassword, setRegisterPassword] = useState('');
  const [RegisterConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [RegisterError, setRegisterError] = useState({});
  //Toast for registration 
  const existingUsererror = () => {
    toast('Email Is Allready Taken', { hideProgressBar: true, autoClose: 1000, type: 'error' })
  }
  //Toast Notification For Successuful Registration 
  const successfulRegistration = () => {
    toast('Registration Successful', { hideProgressBar: true, autoClose: 1000, type: 'success' })
  }
  const validateRegisterEmail = (Registeremail: any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(Registeremail);
  };

  const validateRegisterPassword = (Registerpassword: any) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(Registerpassword);
  };

  const handleRegistrationSubmit = (e: any) => {
    e.preventDefault();
    console.log(Registerusername, Registeremail, Registerpassword, RegisterConfirmPassword);
    if (validateRegisterEmail(Registeremail) || validateRegisterPassword(Registerpassword)) {
      const data = {
        name: Registerusername,
        email: Registeremail,
        password: Registerpassword,
      };
      axios
        .post('https://api.linktyp.com/api/register', data)
        .then((res) => {
          console.log(res)
          console.log(res.data.status)
          if (res.data.status === true) {
            // alert("Registration Successuful");
            successfulRegistration();
            router.push("/")
          }
          if (res.data.message === "This email is already taken.") {
            // alert("Email is Already taken");
            existingUsererror();
          }
        })
        .catch((err) => {
          console.log("error")
        })

    } else {
      // display error message for invalid email
      setRegisterError({ email: 'Invalid Email' });
    }
  };

  //Code to change the Login and Register Form
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  // console.log(showRegisterForm);

  const handleDiv = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  //Main Return Declaration
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <ToastContainer />
        <div className=" bg-gradient-to-r from-pink-500 to-red-500 hidden lg:block md:block  w-full sm:w-1/2 md:w-1/2 xl:w-1/3 h-screen rounded-e-3xl">
          <div className='flex flex-col h-[100%] justify-center items-center px-3'>
            <img src="https://dummyimage.com/250x250/000/fff" className=' mb-10 rounded-lg w-52 h-52' alt="" />
            {/* <h1>LT</h1> */}
            <h2 className="md:text-3xl text-2xl pb-4 text-white font-weight-bolder uppercase tracking-widest">Your journey starts here</h2>
            <p className="text-white text-center uppercase tracking-wider pt-5">Sign up now and easily share all your links in one place with our linktree-inspired platform!</p>
          </div>
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-2/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div
            className="w-full md:max-w-md lg:max-w-full md:mx-0 sm:w-full md:w-full xl:w-2/3 h-screen  xl:px-12
      flex items-center justify-center"
          >
            {showRegisterForm ? (
              // Register Form
              <>
                <div className="w-full h-100">
                  <h1 className="text-3xl md:text-5xl text-center font-bold">
                    Create your account
                  </h1>
                  <h1 className="text-lg text-gray-600 md:text-xl leading-tight mt-6 text-center">
                    Welcome to our platform!
                  </h1>
                  <form className="mt-6" action="#" method="POST" onSubmit={handleRegistrationSubmit}>
                    <div>
                      <label className="block text-gray-700" htmlFor='Registerusername'>
                        Enter Username
                      </label>
                      <input
                        value={Registerusername}
                        onChange={(e) => setRegisterUsername(e.target.value)}
                        type="text"
                        name="Registerusername"
                        id="Registerusername"
                        placeholder="Enter Your Username"
                        className="w-full px-4 py-3 rounded-full bg-gray-200 mt-2 border focus:border-blue-600 focus:bg-white focus:outline-none"
                        autoFocus
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-gray-700" htmlFor='Registeremail'>
                        Email Address
                      </label>
                      <input
                        value={Registeremail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        type="email"
                        name="Registeremail"
                        id="Registeremail"
                        placeholder="Enter Email Address"
                        className="w-full px-4 py-3 rounded-full bg-gray-200 mt-2 border focus:border-gradient-to-r from-pink-500 to-red-500
             focus:bg-white focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-gray-700" htmlFor='Registerpassword'>Password</label>
                      <input
                        value={Registerpassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        type="password"
                        name="Registerpassword"
                        id="Registerpassword"
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-full bg-gray-200 mt-2 border focus:border-gradient-to-r from-pink-500 to-red-500
             focus:bg-white focus:outline-none"
                        required
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-gray-700" htmlFor='RegisterConfirmPassword'>
                        Confirm Password
                      </label>
                      <input
                        value={RegisterConfirmPassword}
                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                        type="password"
                        name="RegisterConfirmPassword"
                        id=" RegisterConfirmPassword"
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-full bg-gray-200 mt-2 border focus:border-blue-600
             focus:bg-white focus:outline-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 hover:bg-blue-600 focus:bg-blue-600 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                    >
                      Signup
                      {/* icons arrow */}
                      <BsArrowRight className="ml-2" />
                    </button>
                  </form>

                  <hr className="my-6 border-gray-300 w-full" />

                  <button
                    type="button"
                    className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-full px-4 py-3 border border-gray-300"
                  >
                    <div className="flex items-center justify-center">
                      {/* svg icon google */}
                      <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path fill="#EA4335 " d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                  <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                  <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                  <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
              </svg>
                      <span className="ml-4">Signup with Google</span>
                    </div>
                  </button>

                  <div className="my-6 border-gray-300 w-full"></div>

                  <p className="mt-8">
                    Already have an Account?
                    <a
                      href="#"
                      className="text-pink-500 hover:text-pink-600 font-semibold"
                      onClick={handleDiv}
                    >
                      Login
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-12">
                    &copy; 2023 Typof - All Rights Reserved.
                  </p>
                </div>
              </>
            ) : (
              // Login Form
              <>
                <div className="w-full h-100">
                  <h1 className="text-3xl md:text-5xl  text-center font-bold uppercase tracking-widest">
                    Welcome back
                  </h1>
                  <h1 className="text-3xl md:text-3xl text-gray-600 leading-tight mt-6 text-center tracking-widest uppercase font-mono">
                    Linktyp
                  </h1>
                  <form className="mt-6" action="#" method="POST" onSubmit={loginFormSubmit}>
                    <div>
                      <label className="block text-gray-700" htmlFor='email'>

                        Email Address
                      </label>
                      <input
                        value={Loginemail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        type="email"
                        name="Loginemail"
                        id="Loginemail"
                        placeholder="Enter Email Address"
                        className="w-full px-4 py-3 rounded-full bg-gray-200 mt-2 border focus:border-[#E95488] focus:bg-white focus:outline-none"
                        autoFocus
                        required
                      />
                      <p className='text-red-600'>{emailError}</p>
                    </div>

                    <div className="mt-4">
                      <label className="block text-gray-700" htmlFor='password'>Password</label>
                      <input
                        value={Loginpassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        type="password"
                        name="Loginpassword"
                        id="Loginpassword"
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-full bg-gray-200 mt-2 border focus:border-[#E95488]
                    focus:bg-white focus:outline-none"
                        required
                      />
                      <p className='text-red-600'>{passwordError}</p>
                    </div>

                    <div className="text-right mt-2">
                      <a
                        href="#"
                        className="text-sm font-semibold text-gray-700 hover:text-blue-600 focus:text-blue-600"
                      >
                        Forgot Password?
                      </a>
                    </div>

                    <button
                      onClick={loginFormSubmit}
                      type="submit"
                      className="w-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 hover:bg-blue-600 focus:bg-blue-600 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6"

                    >
                      Log In

                      {/* icons arrow */}
                      <BsArrowRight className="ml-2" />
                    </button>
                  </form>

                  <hr className="my-6 border-gray-300 w-full" />

                  <button
                    type="button"
                    className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-full px-4 py-3 border border-gray-300"
                  >
                    <div className="flex items-center justify-center">
                      {/* svg icon google */}
                      <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path fill="#EA4335 " d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                  <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                  <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                  <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
              </svg>
                      <span className="ml-4">Log in with Google</span>
                    </div>
                  </button>

                  <div className="my-6 border-gray-300 w-full"></div>
                  <button
                    type="button"
                    className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-full px-4 py-3 border border-gray-300"
                  >
                    <div className="flex items-center justify-center">
                      <span className="ml-4 flex">
                        <BsPhoneFill className="w-6 h-6 mr-1" />
                        Log in with Phone Number
                      </span>
                    </div>
                  </button>

                  <p className="mt-8">
                    Need an account?
                    <a
                      href="#"
                      className="text-pink-500  hover:text-pink-500 font-semibold"
                      onClick={handleDiv}
                    >
                      Create an account
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mt-12">
                    &copy; 2023 Typof - All Rights Reserved.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
   
  );
}




