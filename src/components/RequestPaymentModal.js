import React, { useContext, useState } from "react";
import "./RequestPaymentModal.css";
import { Modal } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../Context/AppContext";
const RequestPaymentModal = (props) => {
  const { user } = useContext(AppContext);
  let userId = user.userID;
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankAcount, setBankAcout] = useState("");
  const [bankName, setBankName] = useState("");
  const [note, setNote] = useState("");
  const [image, setImage] = useState("");
  const handleHideModal = () => {
    props.handleHideModal();
  };
  const handleRequest = async () => {
    try {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("image", image);
      formData.append("bankAcount", bankAcount);
      formData.append("bankName", bankName);
      formData.append("note", note);
      formData.append("userID", userId);
      let res = await axios.post(
        "http://nguyen1-001-site1.ftempurl.com/api/Payment",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("res : ", res);
      props.handleHideModal();
      toast.success("Yêu câu thành toán của bạn đã được ghi lại !!!");
    } catch (e) {
      console.log(e);
    }
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
            <span>Tạo yêu cầu thanh toán</span>
            <span className="btn-hide-modal" onClick={handleHideModal}>
              x
            </span>
          </div>
          <div className="booking-modal-body">
            <div className="row">
              <div className="col-6 form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label>Ho tên</label>
                <input
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label>Số điện thoại</label>
                <input
                  className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="col-6 form-group">
                <label>Tài khoản ngân hàng</label>
                <input
                  className="form-control"
                  onChange={(e) => setBankAcout(e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label>Tên ngân hàng</label>
                <input
                  className="form-control"
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label>Ghi chú</label>
                <input
                  className="form-control"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label>hình ảnh hóa đơn</label>
                <input
                  className="form-control"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="booking-modal-footer">
            <button className="btn-confirm" onClick={handleRequest}>
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

export default RequestPaymentModal;
