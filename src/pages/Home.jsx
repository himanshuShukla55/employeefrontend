import React, { useState } from "react";
import SignUp from "../components/SignUp.compnent";
import Login from "../components/Login.component";

const Home = () => {
  const [isSignup, setIsSignUp] = useState(true);
  const toggleForm = ({ target: { textContent: label } }) => {
    switch (label) {
      case "SignUp":
        setIsSignUp(true);
        break;
      case "Login":
        setIsSignUp(false);
    }
  };
  return (
    <div id="home">
      <div id="form-container">
        <h1>{isSignup ? "Sign Up" : "Login"} Form</h1>
        <div id="buttons-container" onClick={toggleForm}>
          <button>SignUp</button>
          <button>Login</button>
        </div>
        {isSignup ? <SignUp setIsSignUp={setIsSignUp} /> : <Login />}
      </div>
    </div>
  );
};

export default Home;
