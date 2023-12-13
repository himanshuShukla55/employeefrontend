import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogoutSuccess } from "../Redux/Action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [empData, setEmpData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch(
        "https://employeebackend-nz5b.onrender.com/employees",
        {
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("accessToken")
            )}`,
          },
        }
      );
      const { success, msg, data } = await res.json();
      if (!success) {
        console.log(msg);
        return;
      }
      setEmpData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = () => {
    dispatch(userLogoutSuccess());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="dashboard">
      <h1>Employee Management Software</h1>
      <div>
        <button>Add Employee</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {empData.length > 0 ? (
        <div id="data-container">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {empData.map(
                ({ firstName, lastName, email, department, salary }, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{salary}</td>
                    <td>{department}</td>
                    <td>
                      <div>
                        <button>EDIT</button>
                        <button>DELETE</button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No employee's Record exist</div>
      )}
    </div>
  );
};

export default Dashboard;
