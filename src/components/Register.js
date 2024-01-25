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

  //const token = localStorage.getItem('token');
  const handleOnclick = async (e) => {
    try {
      const response = await axios.post(
        "http://nguyen1-001-site1.ftempurl.com/api/User/sign-up",
        {
          email,
          password,
          retypePassword,
          displayName: name,
          phone: number,
        }
        // ,
        // {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // }
      );
      console.log(response);
      // Xử lý dữ liệu từ response
      if (response && response.data && response.data.errorCode === 6) {
        setMessage(response.data.errorMessage);
        setError("");
      }
    } catch (error) {
      setError(error.response.data.errorMessage);
      setMessage("");
      console.log(error);
    }
  };
  return (
    <section className="contact-us section">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="center"
                src="https://img.freepik.com/premium-vector/health-insurance-concept-hospital-medical-care-vector-illustration-flat_186332-1182.jpg?w=1380"
                alt="#"
              />
            </div>
            <div className="col-lg-6">
              <div className="contact-us-form">
                <h2>Đăng ký tài khoản</h2>
                <p>Đăng ký tài khoản để truy cập các dịch vụ của chúng tôi.</p>
                {/* <!-- Form --> */}
                <div className="form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          name="password"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          name="retyprPassword"
                          type="Password"
                          placeholder="Retype Password"
                          value={retypePassword}
                          onChange={(e) => setRetypePassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          name="FullName"
                          type="text"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          name="number"
                          type="text"
                          placeholder="Number"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group login-btn">
                        <button
                          className="btn"
                          type="submit"
                          onClick={handleOnclick}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Form --> */}
                <div className="footer-register">
                  <span
                    className="text-notification"
                    style={{ color: message ? "blue" : "red" }}
                  >
                    {err}
                    {message}
                  </span>
                  <a href="/login">Đăng nhập</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
