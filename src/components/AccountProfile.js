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
  const [image, setImage] = useState("");
  const [user, setUser] = useState({});
  // const { user, setUser } = useContext(AppContext);
  const users = JSON.parse(localStorage.getItem("user"));
  let id = users.userID;
  //const token = localStorage.getItem("token");
  const HandleChangeUser = async () => {
    try {
      let formData = new FormData();
      formData.append("displayName", name);
      formData.append("phone", phone);
      formData.append("image", image);
      let res = await axios.put(
        `http://nguyen1-001-site1.ftempurl.com/api/User/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // setPhone("");
      // setName("");
      console.log("res : ", res);
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
      setUser(res.data);
    };
    loadUser();
  }, [user, id, setUser]);

  return (
    <section className="news-single section">
      <Header />
      <div className="container">
        <div className="row" style={{ marginBottom: "200px" }}>
          <div className="col-lg-12 col-12">
            <div className="row">
              <div className="col-12">
                <div className="blog-comments">
                  <h2>Thông tin cá nhân</h2>
                  <div className="comments-body">
                    <div className="single-comments">
                      <div className="main">
                        <div className="head">
                          {/* <img src="img/author1.jpg" alt="#" /> */}
                          <div
                            className="user-image"
                            style={{
                              backgroundImage: `url(${user.image})`,
                            }}
                          ></div>
                        </div>
                        <div className="body">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                              <div className="info">
                                <h4>Họ tên</h4>
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
                                <h4>Số điện thoại</h4>
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
                  <h2>Cập nhật thông tin cá nhân</h2>
                  <div className="form">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <i className="fa fa-user"></i>
                          <input
                            type="text"
                            name="name"
                            placeholder="Họ tên"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <i className="fa fa-phone"></i>
                          <input
                            type="tel"
                            name="Số điện thoại"
                            placeholder="Số điện thoại"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <i class="fa-regular fa-image"></i>
                          <input
                            type="file"
                            name="image"
                            placeholder="Hình ảnh"
                            onChange={(e) => setImage(e.target.files[0])}
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
