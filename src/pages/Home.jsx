import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [mobile_no, setMobile__no] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    if (userName === "") {
      toast.error("User name is required", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (mobile_no === "") {
      toast.error("Mobile no is required", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (address === "") {
      toast.error("Address is required", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (occupation === "") {
      toast.error("Occupation is required", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      localStorage.setItem("userName", JSON.stringify(userName));

      localStorage.setItem("mobile_No", JSON.stringify(mobile_no));

      localStorage.setItem("address", JSON.stringify(address));

      localStorage.setItem("occupation", JSON.stringify(occupation));

      toast.success("User saved!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/user");
    }
  };

    useEffect(() => {
    const storedData =JSON.parse( localStorage.getItem("userList"));
    if (!storedData) {
      navigate('/login')
    }
  }, []);

  return (
    <div className="container1">
      <div className="box">
        <form className="form_details">
          <h1>User Information</h1>
          <div>
            <label>User Name: </label>
            <input
              type="text"
              className="user_details"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <br></br>

          <div>
            <label>Mobile No: </label>
            <input
              type="number"
              className="user_details"
              value={mobile_no}
              onChange={(e) => setMobile__no(e.target.value)}
            />
          </div>
          <br></br>

          <div>
            <label>Address: </label>
            <input
              type="text"
              className="user_details"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <br></br>

          <div>
            <label>Occupation:</label>
            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="select_details"
            >
              <option value="Select Occupation">Select Occupation</option>
              <option value="Developer">Developer</option>
              <option value="Doctor">Doctor</option>
              <option value="Bussinesman">Bussinesman</option>
              <option value="Layer">Layer</option>
            </select>
          </div>
          <br></br>

          <button className="btn-btn" onClick={handleSubmit}>
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Home;
