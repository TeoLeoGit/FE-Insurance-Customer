import React, { useState } from "react";
import "./PayMentRequest.css";
import Header from "./Header";
const PaymentRequest = () => {
  return (
    <div>
      <Header />
      <h2 style={{ marginTop: "50px", textAlign: "center" }}>
        Yêu cầu thanh toán
      </h2>
    </div>
  );
};

export default PaymentRequest;
