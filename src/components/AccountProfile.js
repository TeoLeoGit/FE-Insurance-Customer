import React, { useState, useEffect, useContext } from "react";
import "./AccountProfile.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { AppContext } from "../Context/AppContext";
import { toast } from "react-toastify";
const AccountProfile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { user, setUser } = useContext(AppContext);
  let id = user.userID;

  const HandleChangeUser = async () => {
    try {
      await axios.put(`http://nguyen1-001-site1.ftempurl.com/api/User/${id}`, {
        displayName: name,
        phone: phone,
      });
      setPhone("");
      setName("");
      toast.success("Cập nhật thông tin thành công !!");
    } catch (e) {
      console.log("error : ", e);
      toast.error("Cập nhật thông tin thất bại !!");
    }
  };

  useEffect(() => {
    let loadUser = async () => {
      let res = await axios.get(
        `http://nguyen1-001-site1.ftempurl.com/api/User/${id}`
      );
      console.log("res : ", res);
      setUser(res.data);
    };
    loadUser();
  }, [user, id, setUser]);

  return (
    <section className="news-single section">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="row">
              <div className="col-12">
                <div className="blog-comments">
                  <h2>Thông tin cá nhân</h2>
                  <div className="comments-body">
                    <div className="single-comments">
                      <div className="main">
                        <div className="head">
                          <img src="img/author1.jpg" alt="#" />
                        </div>
                        <div className="body">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                              <div className="info">
                                <h4>Name</h4>
                                <p>{user.displayName}</p>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                              <div className="info">
                                <h4>Email</h4>
                                <p>{user.email}</p>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                              <div className="info">
                                <h4>Contact number</h4>
                                <p>{user.phone}</p>
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
                  <div className="form">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <i className="fa fa-user"></i>
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <i className="fa fa-phone"></i>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Contact number"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <i className="fa fa-envelope"></i>
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="form-group button">
                          <button
                            className="btn primary"
                            onClick={HandleChangeUser}
                          >
                            <i className="fa fa-edit"></i>Lưu thay đổi
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
