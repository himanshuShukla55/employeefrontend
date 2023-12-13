import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  userLoginFailed,
  userLoginStart,
  userLoginSuccess,
} from "../Redux/Action";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const { email, password } = user;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(userLoginStart());
      const res = await fetch(
        "https://employeebackend-nz5b.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const { success, data, msg } = await res.json();
      if (!success) {
        dispatch(userLoginFailed({ msg: "login failed" }));
        return;
      }
      localStorage.setItem("accessToken", JSON.stringify(data));
      dispatch(userLoginSuccess());
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      dispatch(userLoginFailed(error));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter Password"
        required
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
