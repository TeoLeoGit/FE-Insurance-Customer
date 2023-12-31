import React, { useContext, useState } from "react";
import "./BuyModal.css";
import { Modal } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../Context/AppContext";
const BuyModal = (props) => {
  const [Date, setDate] = useState("");
  const { user } = useContext(AppContext);
  let userId = user.userID;
  const handleHideModal = () => {
    props.handleHideModal();
  };
  const handleSaveBuy = async () => {
    try {
      let res = await axios.post(
        "http://nguyen1-001-site1.ftempurl.com/api/Purchase",
        {
          id: props.id,
          userId: userId,
        }
      );
      console.log("res : ", res);
      props.handleHideModal();
      toast.success(
        "Đăng ký mua gói bảo hiểm thành công Vui lòng tới chi nhánh gần nhất để hoàn thành hợp đồng và thanh toán"
      );
    } catch (e) {
      console.log(e);
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
