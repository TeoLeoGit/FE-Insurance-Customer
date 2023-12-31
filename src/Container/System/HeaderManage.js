import React from "react";
import { Link } from "react-router-dom";
import "./HeaderManage.css";
const HeaderManage = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          Admin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="link-manage">
              <Link to="/manageInsurance">Quản lý User</Link>
            </li>
            <li className="link-manage">
              <Link to="/manageInsurance">Quản lý Gói Bảo Hiểm</Link>
            </li>
            <li className="link-manage">
              <Link to="/manageCustomerInsurance">
                Quản lý Đơn Đăng Ký Bảo Hiểm
              </Link>
            </li>
          </ul>
          <div className="navbar-nav">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Xin chào,
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/"
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    Đăng Xuất
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderManage;
