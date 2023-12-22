import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [err, setError] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://nguyen1-001-site1.ftempurl.com/api/User?email=${email}&password=${password}`
      );
      // Xử lý dữ liệu từ response
      if (response && response.data && response.data.errorCode === 0) {
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
                    <div className="col-lg-6" >
                        <img className="center"src="https://img.freepik.com/premium-vector/health-insurance-concept-hospital-medical-care-vector-illustration-flat_186332-1182.jpg?w=1380" alt="#"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-us-form">
                            <h2>Login to your account</h2>
                            <p>Login your account to access our valuable services.</p>
                            {/* <!-- Form --> */}
                            <form className="form" method="post" action="mail/mail.php">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="form-group login-btn">
                                            <button className="btn" type="submit" onClick={handleLogin}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* <!--/ End Form --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default LoginForm;
