import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./DetailInsurance.css";
import Header from "./Header";
import BuyModal from "./BuyModal";
const DetailInsurance = () => {
  const history = useHistory();
  const [item, setItem] = useState("");
  const [isShowModal, SetIsShowModal] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get(
          `http://nguyen1-001-site1.ftempurl.com/api/Insurance/${id}`
        );
        setItem(res.data);
      };
      loading();
    } catch (e) {
      console.log(e);
    }
  });
  const handleBack = () => {
    history.push("/listInsurance");
    window.location.reload();
  };
  const handleHideModal = () => {
    SetIsShowModal(!isShowModal);
  };
  return (
    <>
      <Header />
      <div>
        <span className="back-list" onClick={handleBack}>
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <div className="Detail-title">
          <h2>Chi tiết gói bảo hiểm</h2>
        </div>
        <div className="detail-Container">
          <div className="image"></div>
          <div className="detail-content">
            <h5 data-id="title" class="card-title">
              {item.name}
            </h5>
            <p data-id="description" class="card-text">
              {item.title}
            </p>
            <p class="card-text-detail">
              <div className="price">
                <small class="price-title">Giá: </small>
                <small class="text-price font-weight-bold">
                  {item.price} Vnd
                </small>
              </div>
              <div className="period">
                <small class="period-title">Thời hạn: </small>
                <small class="period-text font-weight-bold">
                  {item.period}
                </small>
              </div>
            </p>
            <h2 className="description-detail">Mô tả chính sách bảo hiểm</h2>
            <p className="text-detail">{item.description}</p>
            <button
              className="btn btn-primary btn-buy"
              onClick={handleHideModal}
            >
              Mua gói bảo hiểm
            </button>
          </div>
        </div>
        <BuyModal handleHideModal={handleHideModal} isShowModal={isShowModal} />
      </div>
    </>
  );
};

export default DetailInsurance;
