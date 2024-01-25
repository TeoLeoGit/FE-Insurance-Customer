import React, { useContext, useState } from "react";
import "./ModalShowBill.css";
import { Modal } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
const ModalShowBill = (props) => {
  const handleHideModal = () => {
    props.handleHideModal();
  };

  // const token = localStorage.getItem('token');
  // const handleSaveBuy = async () => {
  //   try {
  //     console.log("Check token " + token);
  //     let res = await axios.post(
  //       "http://nguyen1-001-site1.ftempurl.com/api/Purchase",
  //       {
  //         id: props.id,
  //         userId: userId,
  //       },
  //       {
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       }
  //     );
  //     props.handleHideModal();
  //     toast.success(
  //       "Đăng ký mua gói bảo hiểm thành công Vui lòng tới chi nhánh gần nhất để hoàn thành hợp đồng và thanh toán"
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <>
      <Modal
        isOpen={props.isShowModal}
        className={"modal-booking-container"}
        size="lg"
        centered
      >
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <span>Xem hóa đơn khám bệnh</span>
            <span className="btn-hide-modal" onClick={handleHideModal}>
              x
            </span>
          </div>
          <div className="image-container">
            <div
              className="image-bill"
              style={{
                backgroundImage:
                  "url(https://itoday.vn/uploads/images/news/2022/06/06/1117-bv-nhiet-doi-1--1654485678.jpg)",
              }}
            ></div>
          </div>
          <div className="booking-modal-footer"></div>
        </div>
      </Modal>
    </>
  );
};

export default ModalShowBill;
