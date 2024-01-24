import React, { useState } from "react";
import "./PayMentRequest.css";
import Header from "./Header";
import RequestPaymentModal from "./RequestPaymentModal";
const PaymentRequest = () => {
  let [isShowModal, setIsShowModal] = useState(false);
  const OpenModal = () => {
    setIsShowModal(true);
  };
  const handleHideModal = () => {
    setIsShowModal(false);
  };
  return (
    <div>
      <Header />
      <div className="action-top">
        <button className="add-btn-request" onClick={OpenModal}>
          Thêm một yêu cầu thanh toán
        </button>
        <h2 className="text-center">Danh sách yêu cầu thanh toán</h2>
      </div>
      <RequestPaymentModal
        isShowModal={isShowModal}
        handleHideModal={handleHideModal}
      />
    </div>
  );
};

export default PaymentRequest;
