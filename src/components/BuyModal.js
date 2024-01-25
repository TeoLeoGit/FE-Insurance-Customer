import React, { useContext, useState } from "react";
import "./BuyModal.css";
import { Modal } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
const BuyModal = (props) => {
  const handleHideModal = () => {
    props.handleHideModal();
  };

  //const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem("user"));
  let userId = user.userID;
  const handleSaveBuy = async () => {
    try {
      let res = await axios.post(
        "http://nguyen1-001-site1.ftempurl.com/api/Purchase",
        {
          id: props.id,
          userId: userId,
        }
        // },
        // {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // }
      );
      console.log("res : ", res);
      if (res && res.data && res.data.success === true) {
        props.handleHideModal();
        toast.success(
          "Đăng ký mua gói bảo hiểm thành công. Vui lòng tới chi nhánh gần nhất để hoàn thành hợp đồng và thanh toán"
        );
      }
    } catch (e) {
      console.log(e);
      if (e && e.response && e.response.data && e.response.data.errorMessage) {
        toast.error(e.response.data.errorMessage);
      }
    }
  };
  return (
    <>
      <Modal
        isOpen={props.isShowModal}
        className={"modal-booking-container"}
        size="md"
        centered
      >
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <span>Mua Gói Bảo hiểm</span>
            <span className="btn-hide-modal" onClick={handleHideModal}>
              x
            </span>
          </div>
          {/* <div className="booking-modal-body">
            <div className="row">
              <div className="col-6 form-group">
                <label>Họ Tên</label>
                <input
                  className="form-control"
                  onChange={(e) => this.handleonChangeInput(e, "name")}
                />
              </div>
              <div className="col-6 form-group">
                <label>Số điện thoại</label>
                <input
                  className="form-control"
                  onChange={(e) => this.handleonChangeInput(e, "phone")}
                />
              </div>
              <div className="col-6 form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  onChange={(e) => this.handleonChangeInput(e, "email")}
                />
              </div>
              <div className="col-6 form-group">
                <label>Địa chỉ</label>
                <input
                  className="form-control"
                  onChange={(e) => this.handleonChangeInput(e, "address")}
                />
              </div>
              <div className="col-12 form-group">
                <label>Ngày Sinh</label>
                <input
                  className="form-control"
                  type="Date"
                  onChange={(e) => setDate(e.target.value)}
                  value={Date}
                />
              </div>
              <div className="col-6 form-group">
                <label></label>
              </div>
            </div>
          </div> */}
          <div className="booking-modal-footer">
            <button className="btn-confirm" onClick={handleSaveBuy}>
              Xác nhận
            </button>
            <button className="btn-cancel" onClick={handleHideModal}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BuyModal;
