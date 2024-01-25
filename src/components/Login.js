import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [notice, setNotice] = useState("");
  const [err, setError] = useState("");
  const history = useHistory();
  const { user, setUser } = useContext(AppContext);
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `http://truongcuongtest-001-site1.etempurl.com/api/User/login`,
        {
          email: email,
          password: password,
        }
      );
      // Xử lý dữ liệu từ response
      console.log("response : ", response);
      if (response && response.data) {
        let decodeToken = jwtDecode(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(decodeToken));

        setUser(decodeToken);
        history.push("/");
        window.location.reload();
      }

      if (response && response.data && response.data.errorCode === 0) {
        localStorage.setItem("user", JSON.stringify(response.data.userDTO));
        history.push("/");
        window.location.reload();
      }
    } catch (error) {
      setError(error.response.data.errorMessage);
      setPassword("");
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
                <h2>Đăng nhập tài khoản</h2>
                <p>
                  Đăng nhập tài khoản để truy cập các dịch vụ của chúng tôi.
                </p>
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

                    <div className="col-12">
                      <div className="form-group login-btn">
                        <button
                          className="btn"
                          type="submit"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Form --> */}
                <div className="footer-login">
                  <span className="text-notification" style={{ color: "red" }}>
                    {err}
                  </span>
                  <Link to="/register">Đăng kí tài khoản mới</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
