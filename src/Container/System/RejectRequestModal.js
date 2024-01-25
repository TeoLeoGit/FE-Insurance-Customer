import React, { useContext, useState } from "react";
import "./RejectRequestModal.css";
import { Modal } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
const RejectRequestModal = (props) => {
  const [reason, setReason] = useState("");
  const handleHideModalReject = () => {
    props.handleHideModalReject();
  };

  //const token = localStorage.getItem('token');
  const handleSaveReject = async () => {
    try {
      let res = await axios.put(
        `http://nguyen1-001-site1.ftempurl.com/api/Payment/${props.items.id}`,
        {
          status: "Thanh toán bị hủy",
          reason: reason,
        }
      );
      console.log("res tu choi : ", res);
      toast.success("Đã hủy thanh toán thành công!!!");
      props.handleHideModalReject();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Modal
        isOpen={props.isShowModalReject}
        className={"modal-booking-container"}
        size="md"
        centered
      >
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <span>Lí do từ chối thanh toán</span>
            <span className="btn-hide-modal" onClick={handleHideModalReject}>
              x
            </span>
          </div>
          <div className="booking-modal-body">
            <div className="row">
              <div className="col-6 form-group">
                <label>Lí do</label>
                <textarea
                  className="form-control"
                  onChange={(e) => setReason(e.target.value)}
                  rows={5}
                  cols={50}
                />
              </div>
            </div>
          </div>
          <div className="booking-modal-footer">
            <button className="btn-confirm" onClick={handleSaveReject}>
              Xác nhận
            </button>
            <button className="btn-cancel" onClick={handleHideModalReject}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RejectRequestModal;
