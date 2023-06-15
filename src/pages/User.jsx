import React, { useEffect} from 'react'
import "../css/User.css"
import {Link, useNavigate} from 'react-router-dom'
const User = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const storedData =JSON.parse( localStorage.getItem("userList"));
    if (!storedData) {
      navigate('/login')
    }
  }, []);
  return (
    <div>
        <h1>User Table</h1>
        <table className='table_data'>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>User Name</th>
                <th>Mobile No</th>
                <th>Address</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
            
                <tr>
                <td>1</td>

                    <td>{JSON.parse(localStorage.getItem('userName')) ? JSON.parse(localStorage.getItem('userName')):'NA'}</td>
                    <td>{JSON.parse(localStorage.getItem('mobile_No')) ? JSON.parse(localStorage.getItem("mobile_No")):'NA'}</td>
                    <td>{JSON.parse(localStorage.getItem('address')) ? JSON.parse(localStorage.getItem("address")):'NA'}</td>
                    <td>{JSON.parse(localStorage.getItem('occupation')) ? JSON.parse(localStorage.getItem("occupation")):'NA'}</td>
                </tr>
            </tbody>
        </table>
        <Link to={'/home'}>Back</Link>
    </div>
  )
}

export default User