// RegisterForm.js
import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [err, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleOnclick = async (e) => {
    try {
      console.log(email, password, retypePassword, name, number);
      const response = await axios.post("https://localhost:44313/api/User", {
        email,
        password,
        retypePassword,
        displayName: name,
        phone: number,
      });
      console.log(response);
      // Xử lý dữ liệu từ response
      if (response && response.data && response.data.errorCode === 0) {
        setMessage(response.data.message);
        setError("");
      }
    } catch (error) {
      setError(error.response.data.errorMessage);
      setMessage("");
      console.log(error);
    }
  };

  return (
    <div className="container-register">
      <div class="card" style={{ width: "400px" }}>
        <div class="card-header text-center">
          <h2>Register</h2>
        </div>
        <div class="card-body">
          <div class="row g-3" method="POST">
            <div class="col-12">
              <input
                type="text"
                class="form-control {{validate}}"
                placeholder="Email"
                id="Email"
                name="Email"
                //value="{{username}}"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="col-12">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                id="password"
                name="password"
                //value="{{password}}"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="col-12">
              <input
                type="password"
                class="form-control"
                placeholder="Retype Password"
                id="retypePassword"
                name="retypePassword"
                // value="{{email}}"
                required
                onChange={(e) => setRetypePassword(e.target.value)}
              />
            </div>
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                id="name"
                name="name"
                //value="{{name}}"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                placeholder="Number"
                id="Number"
                name="Number"
                // value="{{email}}"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div class="col-12">
              <button
                class="btn btn-primary w-100"
                type="submit"
                onClick={handleOnclick}
              >
                Register
              </button>
            </div>
            <div class="text-danger">{err}</div>
            <div class="text-danger">{message}</div>
            <div class="col-12">
              <span>
                Already have an account? <a href="/login">Login </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
