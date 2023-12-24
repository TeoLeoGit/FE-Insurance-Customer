import React, { useState } from "react";
import "./BuyModal.css";
import { Modal } from "reactstrap";
const BuyModal = (props) => {
  const [Date, setDate] = useState("");
  const handleHideModal = () => {
    props.handleHideModal();
  };
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
            <span>Mua Gói Bảo hiểm</span>
            <span className="btn-hide-modal" onClick={handleHideModal}>
              x
            </span>
          </div>
          <div className="booking-modal-body">
            {/* <ProfileDoctor
              doctorId={doctorId}
              isShowDescriptionDoctor={false}
              datatime={datatime}
            /> */}
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
              {/* <div className="col-6 form-group">
                <label>Ngày sinh</label>
              </div> */}
              <div className="col-6 form-group">
                <label></label>
                {/* <Select
                  value={this.state.selectedGender}
                  onChange={(e) => this.handleChange(e)}
                  options={this.state.genders}
                  placeholder={"Giới Tính"}
                /> */}
              </div>
            </div>
          </div>
          <div className="booking-modal-footer">
            <button
              className="btn-confirm"
              // onClick={() => this.handleSaveBooking()}
            >
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
