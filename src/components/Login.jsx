import React, { useState } from "react";
import Title from "./Title";
import Stars from "./Stars";
import Cvijet from "./CvijetLogin";
import Pahulje from "./Pahulje";

function Login({ onUserSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      onUserSubmit(username, password);
    }
  };

  return (
    <>
      <Stars />
      <Pahulje />

      <div className="login">
        <Cvijet />
        <div className="login-box">
          <Title />
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-group">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
                placeholder="Username"
              />
              <label className="login-label">Username</label>
            </div>
            <div className="login-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                placeholder="Password"
              />
              <label className="login-label">Password</label>
            </div>
            <div className="login-group">
              <button className="login-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
