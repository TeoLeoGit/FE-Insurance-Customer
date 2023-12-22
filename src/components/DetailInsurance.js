import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./DetailInsurance.css";
import Header from "./Header";
const DetailInsurance = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push("/listInsurance");
    window.location.reload();
  };
  return (
    <div>
      <Header />
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
            Gói bảo hiểm 1
          </h5>
          <p data-id="description" class="card-text">
            Bảo hiểm sức khỏe tổng quát
          </p>
          <p class="card-text-detail">
            <div className="price">
              <small class="price-title">Giá: </small>
              <small class="text-price font-weight-bold">10.000.000</small>
            </div>
            <div className="period">
              <small class="period-title">Thời hạn: </small>
              <small class="period-text font-weight-bold">5 năm</small>
            </div>
          </p>
          <h2 className="description-detail">Mô tả chính sách bảo hiểm</h2>
          <p className="text-detail">Được giảm 50% tiền khám bệnh</p>
          <button className="btn btn-primary btn-buy">Mua gói bảo hiểm</button>
        </div>
      </div>
    </div>
  );
};

export default DetailInsurance;
