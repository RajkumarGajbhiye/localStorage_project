import React, {useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUp.css"
const SignUp = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errMessage, setErrorMessage] = useState({});
  const [userList, setUserList] = useState([]);



  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(credentials);
    setErrorMessage(validate(credentials));

    try {
      const storedData = localStorage.getItem("userList");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const foundUser = parsedData.find(
          (user) => user.password === credentials.password);
        if (foundUser) {
          toast.error("Password must be unique");
          return;
        }
      }

      if (credentials.name && credentials.email && credentials.password) {
        const newUser = {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        };


        const updatedList = [...userList, newUser];
        localStorage.setItem("userList", JSON.stringify(updatedList));
        setUserList(updatedList);
        toast.success("Sign up successful");
        setTimeout(()=>{
          navigate("/login")
        },2000)
       
      } else {
        toast.error("Enter proper details");
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
    if (!values.name) {
      errors.name = "*Name is required";
    } else if (values.name.length < 4) {
      errors.name = "*Name should be at least 4 characters";
    }
    if (!values.email) {
      errors.email = "*Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "*This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (!password_term.test(values.password)) {
      errors.password =
        "*Password should be minimum 8 characters, 1 small letter, 1 capital letter, and 1 special character";
    }
    return errors;
  };



  return (
    <div className="container">
      <div className="main">
        <form className="form_data">
          <h1>Register Form</h1>
          <br></br>
          <label className="label_data">Name:</label>
          <input
            className="input_box"
            type="text"
            placeholder="Enter Name"
            value={credentials.name}
            name="name"
            onChange={handleChange}
          />
          <span className="error">{errMessage.name}</span>
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
          <br></br>
          <span className="error">{errMessage.password}</span>

          <button className="btn" onClick={handleSignUp}>
            Sign up
          </button>
<Link  className ='link_signup' to={'/login'}>Already have an Account Login</Link>
          <div className="user-list">
           
            
          </div>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default SignUp;