import React, { useState } from "react";

const SignUp = ({ setIsSignUp }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const { email, password, confirmPassword } = user;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("passwords do not match!");
      return;
    }
    try {
      const res = await fetch(
        "https://employeebackend-nz5b.onrender.com/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const { success, msg } = await res.json();
      if (!success) console.log("signup failed!");
      else setIsSignUp(false);
    } catch (error) {
      console.error(error);
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
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        required
        placeholder="ConfirmPassword"
      />
      <button>SignUp</button>
    </form>
  );
};

export default SignUp;
