import React, { useState, useEffect } from "react";
import "./PayMentRequest.css";
import Header from "./Header";
import RequestPaymentModal from "./RequestPaymentModal";
import axios from "axios";
const PaymentRequest = () => {
  let [isShowModal, setIsShowModal] = useState(false);
  const [arrRequest, setArrRequest] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  let userid = user.userID;

  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get(
          `http://truongcuongtest-001-site1.etempurl.com/api/User/${userid}/payment`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        setArrRequest(res.data);
      };
      loading();
    } catch (e) {
      console.log(e);
    }
  }, [arrRequest]);
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
        <div
          className="row"
          style={{ padding: "0 220px", marginBottom: "200px" }}
        >
          {arrRequest &&
            arrRequest.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-12"
                  style={{
                    paddingLeft: `0px`,
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                  //to={`/detailInsurance/${item.id}`}
                >
                  <div className="single-news">
                    <div className="news-head">
                      <div
                        className="image-insurance"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                    </div>
                    <div className="news-body">
                      <div className="news-content">
                        <div className="date">Thanh toán: {item.note}</div>
                        <button
                          className={
                            item.status === "Thanh toán bị hủy"
                              ? "btn-danger"
                              : "btn-primary"
                          }
                        >
                          {item.status === "Đang chờ phản hồi"
                            ? "Chờ thanh toán"
                            : item.status}
                        </button>
                        <div className="date">
                          {item.reason === "" ? "" : "lí do : " + item.reason}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <RequestPaymentModal
        isShowModal={isShowModal}
        handleHideModal={handleHideModal}
      />
    </div>
  );
};

export default PaymentRequest;
