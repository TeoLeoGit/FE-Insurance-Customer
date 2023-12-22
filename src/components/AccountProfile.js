import React, { useState } from "react";
import "./AccountProfile.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AccountProfile = () => {
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
        <section className="news-single section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-12">
						<div className="row">
							<div className="col-12">
								<div className="blog-comments">
									<h2>Profile</h2>
									<div className="comments-body">
										<div className="single-comments">
											<div className="main">
												<div className="head">
													<img src="img/author1.jpg" alt="#"/>
												</div>
												<div className="body">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="info">
                                                            <h4>Name</h4>
                                                            <p>Trương Công Quốc Cường</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="info">
                                                            <h4>Email</h4>
                                                            <p>truongcuong@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="info">
                                                            <h4>Contact number</h4>
                                                            <p>093432432</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="info">
                                                            <h4>Zip code</h4>
                                                            <p>2000</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                    
                                                    
												</div>
											</div>
										</div>		
										
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="comments-form">
									<h2>Update profile</h2>
									<form className="form" method="post" action="mail/mail.php">
										<div className="row">
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<i className="fa fa-user"></i>
													<input type="text" name="name" placeholder="Name" />
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<i className="fa fa-phone"></i>
													<input type="tel" name="phone" placeholder="Contact number" />
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<i className="fa fa-envelope"></i>
													<input type="email" name="email" placeholder="Your Email" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<i className="fa fa-map-marker"></i>
													<input type="number" name="country" placeholder="Country code" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group button">	
													<button type="submit" className="btn primary"><i className="fa fa-edit"></i>Submit Changes</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
		</section>
  );
};

export default AccountProfile;
