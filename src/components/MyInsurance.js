import React, { useState } from "react";
import "./MyInsurance.css";
import Header from "./Header";
const MyInsurance = () => {
  return (
    <div>
      <Header />
      <h2 style={{ marginTop: "50px", textAlign: "center" }}>
        Bạn chưa đăng kí mua gói bảo hiểm nào
      </h2>
    </div>
  );
};

export default MyInsurance;
