import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.component";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
