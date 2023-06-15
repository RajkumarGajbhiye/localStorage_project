// import React, { useState } from 'react'
// import "../css/Login.css"
// import "react-toastify/dist/ReactToastify.css";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const navigate = useNavigate()
//   const [credentials,setCredentials] = useState({
//     email:"",
//     password:"",
// })
// const [errMessage, setErrorMessage] = useState({});
// const [userList, setUserList] = useState([]);

// const handleChange=(e)=>{
//     setCredentials({...credentials,[e.target.name]:e.target.value})
// }

// const handleLogin = (e) => {
//   e.preventDefault();
//   console.log(credentials);
//   setCredentials({
//     email: "",
//     password: "",
//   });
//   setErrorMessage(validate(credentials));
 
//   try{
//     let authData = JSON.parse(localStorage.getItem('userList'))

//     if (
//       authData.email === credentials.email  &&
//       authData.password===credentials.password ) {
//       toast.success("Successful Login!");
//   console.log(navigate)
//     navigate('/home');
//   alert("Successful Login!")
    
// }
// else if(authData?.email !== credentials?.email){
//   toast.error('email is incorrect',{
//     position: "top-right",
//     autoClose: 1000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored", 
//   });
// }else if(authData?.password !== credentials?.password){
//   toast.error('password is incorrect', {
//     position: "top-right",
//     autoClose: 1000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//     });
// }else{
//    toast.error("Invalid credentials")
//  }
    
//   }catch(error){
// console.log(error.message)
//   }
  
// }

// const validate = (values) => {
//   const errors = {};
//   const password_term =
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//   if (!values.email) {
//     errors.email = "*Email is required";
//   } else if (!regex.test(values.email)) {
//     errors.email = "*This is not valid email formate!";
//   }
//   if (!values.password) {
//     errors.password = "*Password is required";
//   } else if (!password_term.test(values.password)) {
//     errors.password =
//       "*Password should be minimum 8 characters,1small,1capital and special character";
//   }
//   return errors;
// };


//   return (
//     <div className='container'>
//     <div className='main'>
//         <form className='form_data'>
//             <h1>Login Form</h1><br></br>
//             <label className='label_data'>Email:</label>
//             <input className="input_box" type='email' placeholder='Enter Email' value={credentials.email} name={'email'} onChange={handleChange}/><br/>
//             <span className="error">{errMessage.email}</span>

//             <label className='label_data'>Password:</label>
            
//           <input className="input_box" type='password' placeholder='Enter Password' value={credentials.password} name={'password'} onChange={handleChange}/><br/>
//           <span className="error">{errMessage.password}</span>

//             <button className='btn' onClick={handleLogin}>Login</button>
//            <ToastContainer/>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Login.css"
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [errMessage, setErrorMessage] = useState({});

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(credentials);
    setCredentials({
      email: '',
      password: '',
    });
    setErrorMessage(validate(credentials));

    try {
      const storedData = localStorage.getItem('userList');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const foundUser = parsedData.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );
        if (foundUser) {
          toast.success('Successful Login!');
          navigate('/home');
        } else {
          toast.error('Invalid credentials');
        }
      } else {
        toast.error('User not found. Please sign up first.');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const validate = (values) => {
    const errors = {};
    const password_term =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = '*Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = '*This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = '*Password is required';
    } else if (!password_term.test(values.password)) {
      errors.password =
        '*Password should be minimum 8 characters, 1 small letter, 1 capital letter, and 1 special character';
    }
    return errors;
  };

  return (
    <div className="container">
      <div className="main">
        <form className="form_data">
          <h1>Login Form</h1>
          <br />
          <label className="label_data">Email:</label>
          <input
            className="input_box"
            type="email"
            placeholder="Enter Email"
            value={credentials.email}
            name="email"
            onChange={handleChange}
          />
          <span className="error">{errMessage.email}</span>

          <label className="label_data">Password:</label>
          <input
            className="input_box"
            type="password"
            placeholder="Enter Password"
            value={credentials.password}
            name="password"
            onChange={handleChange}
          />
          <br />
          <span className="error">{errMessage.password}</span>

          <button className="btn" onClick={handleLogin}>
            Login
          </button>
          <Link className ='link_login' to={'/'}> have not  an Account SignUp</Link>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;