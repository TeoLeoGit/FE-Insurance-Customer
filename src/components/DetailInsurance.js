import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./DetailInsurance.css";
import Header from "./Header";
import BuyModal from "./BuyModal";
import { Link } from "react-router-dom";
const DetailInsurance = () => {
  const history = useHistory();
  const [item, setItem] = useState("");
  const [isShowModal, SetIsShowModal] = useState(false);

  const token = localStorage.getItem('token');
  let { id } = useParams();
  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get(
          `http://truongcuongtest-001-site1.etempurl.com/api/Insurance/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        setItem(res.data);
      };
      loading();
    } catch (e) {
      console.log(e);
    }
  }, [id]);
  // const handleBack = () => {
  //   history.push("/listInsurance");
  //   window.location.reload();
  // };
  const handleHideModal = () => {
    SetIsShowModal(!isShowModal);
  };
  return (
    <>
      <Header />
      <div>
        <span className="back-list">
          <Link to="/ListInsurance">
            <i class="fa-solid fa-arrow-left"></i>
          </Link>
        </span>
        <div className="Detail-title">
          <h2>Chi tiết gói bảo hiểm</h2>
        </div>
        <div className="detail-Container">
          <div
            className="image-insurance"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
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
        <BuyModal
          handleHideModal={handleHideModal}
          isShowModal={isShowModal}
          id={id}
        />
      </div>
    </>
  );
};

export default DetailInsurance;
