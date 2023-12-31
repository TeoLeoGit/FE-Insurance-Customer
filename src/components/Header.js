import React, { useContext } from "react";
import { useState } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import "./Header.css";
import PaymentRequest from "./PaymentRequest";
import { AppContext } from "../Context/AppContext";
const Header = () => {
  const history = useHistory();
  const [activeHome, setActiveHome] = useState("");
  const [activeMy, setActiveMy] = useState("");
  const [activeReq, setActiveReq] = useState("");
  const [activeNew, setActiveNew] = useState("");
  const { user } = useContext(AppContext);
  const handleActiveHome = () => {
    setActiveHome("active");
    setActiveMy("");
    setActiveNew("");
    setActiveReq("");
  };
  const handleActiveMy = () => {
    setActiveHome("");
    setActiveMy("active");
    setActiveNew("");
    setActiveReq("");
  };
  const handleActiveReq = () => {
    setActiveHome("");
    setActiveMy("");
    setActiveNew("active");
    setActiveReq("");
  };
  const handleActiveNew = () => {
    setActiveHome("");
    setActiveMy("");
    setActiveNew("");
    setActiveReq("active");
  };
  const handleLogout = () => {
    history.push("/login");
    window.location.reload();
  };
  // const handleBuy = () => {
  //   history.push("/listInSurance");
  // };
  const handleUser = () => {
    history.push("/accountProfile");
  };
  return (
    <header className="header">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-12">
              <ul className="top-link">
                <li>
                  <a href="/">Giới thiệu</a>
                </li>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-5 col-12">
              <ul className="top-contact">
                <li>
                  <i className="fa fa-phone"></i>
                  {user.phone}
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:support@yourmail.com">{user.email}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-12 user-container">
              <div className="user">
                <p className="name">{user.displayName}</p>
                <i className="fa-solid fa-user" onClick={handleUser}></i>
              </div>
              <div className="btn-logout">
                <i
                  className="fa-solid fa-right-from-bracket"
                  onClick={handleLogout}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="logo">
                  <Link to="/">
                    <img src="/img/logo.png" alt="#" />
                  </Link>
                </div>
                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-7 col-md-9 col-12">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className={activeHome} onClick={handleActiveHome}>
                        <Link to="/">Trang chủ</Link>
                      </li>
                      <li className={activeMy} onClick={handleActiveMy}>
                        <Link to="/MyInsurance">Gói bảo hiểm của bạn </Link>
                      </li>
                      <li className={activeReq} onClick={handleActiveReq}>
                        <Link to="/PaymentRequest">Yêu cầu thanh toán</Link>
                      </li>
                      <li className={activeNew} onClick={handleActiveNew}>
                        <Link to="/">Tin tức</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-lg-2 col-12">
                <div className="get-quote">
                  <Link className="btn" to="/listInSurance">
                    Mua gói bảo hiểm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
