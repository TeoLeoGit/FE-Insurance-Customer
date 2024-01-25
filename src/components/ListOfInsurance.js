import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListOfInsurance.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";

const ListOfInsurance = () => {
  let [arrInsurance, setArrInsurance] = useState([]);
  const history = useHistory();
  const token = localStorage.getItem("token");
  const handleDetailInsurance = () => {
    history.push("/detailInsurance");
    window.location.reload();
  };

  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get(
          "http://truongcuongtest-001-site1.etempurl.com/api/Insurance",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArrInsurance(res.data);
        console.log("res insurance : ", res.data);
      };
      loading();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <Header />
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Các gói bảo hiểm cho bạn và cho gia đình bạn.</h2>
                <img src="img/section-img.png" alt="#" />
                <p>Mua và nếu bạn bị bệnh bạn sẽ nhận được tiền.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {arrInsurance &&
              arrInsurance.map((item, index) => {
                return (
                  <Link
                    className="col-lg-4 col-md-6 col-12"
                    style={{ paddingBottom: `20px` }}
                    to={`/detailInsurance/${item.id}`}
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
                          <div className="date">{item.name}</div>
                          <h2>
                            <a href="#">{item.title}</a>
                          </h2>
                          <div className="price">
                            <p className="amount">{item.price} Vnd</p>
                          </div>
                          <p className="text">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* <div className="title-list-insurance ">
        <h2>DANH SÁCH CÁC GÓI BẢO HIỂM</h2>
      </div>
      <div class="insuranceItemTemplate row">
        {arrInsurance &&
          arrInsurance.map((item, index) => {
            return (
              <div
                class="col-12 col-md-6 col-lg-4 insurance-item-container "
                onClick={handleDetailInsurance}
              >
                <div class="insurance-item mb-4">
                  <div class="card">
                    <div
                      data-id="thumbnail"
                      class="card-img-top"
                      // style={{ backgroundImage: `url("${item.image}")` }}
                    ></div>

                    <div class="card-body">
                      <h5 data-id="title" class="card-title">
                        {item.name}
                      </h5>

                      <p data-id="description" class="card-text">
                        {item.title}
                      </p>

                      <p class="card-text">
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};

export default ListOfInsurance;
