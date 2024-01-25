import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const HomePage = () => {
   const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const token = localStorage.getItem('token');
  console.log(name);
  console.log(email);
  console.log(phone);

  const handleResponse = async () => {
    
    try {
      let res = await axios.post(
        "http://truongcuongtest-001-site1.etempurl.com/api/Feedback",
        {
          email,
          name,
          phone,
          message,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log("res: ", res);
      toast.success("Gửi phản hồi thành công !!!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container-homepage">
      <Header />
      <div>
        {/* <div className="preloader">
          <div className="loader">
            <div className="loader-outter"></div>
            <div className="loader-inner"></div>

            <div className="indicator">
              <svg width="16px" height="12px">
                <polyline
                  id="back"
                  points="1 6 4 6 6 11 10 1 12 6 15 6"
                ></polyline>
                <polyline
                  id="front"
                  points="1 6 4 6 6 11 10 1 12 6 15 6"
                ></polyline>
              </svg>
            </div>
          </div>
        </div> */}

        <ul className="pro-features">
          <li className="big-title">Pro Version Available on Themeforest</li>
          <li className="title">Pro Version Features</li>
          <li>2+ premade home pages</li>
          <li>20+ html pages</li>
          <li>Color Plate With 12+ Colors</li>
          <li>Sticky Header / Sticky Filters</li>
          <li>Working Contact Form With Google Map</li>
          <div className="button">
            <a href="/" target="_blank" className="btn">
              Pro Version Demo
            </a>
            <a href="/" target="_blank" className="btn">
              Buy Pro Version
            </a>
          </div>
        </ul>

        <section className="slider">
          <div className="hero-slider">
            <div
              className="single-slider"
              // style={{ backgroundImage: `./img/placeholder.png` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        Chúng tôi cung cấp <span>Các gói bảo hiểm</span> Tốt
                        nhất dành cho bạn
                      </h1>
                      <p>
                        Chúng tôi mang đến cho bạn nhiều sự lựa chọn cho vấn đề
                        bảo hiểm sức khỏe cho bạn.{" "}
                      </p>
                      <div className="button">
                        <Link to="/ListInsurance" className="btn">
                          Đặt mua ngay
                        </Link>
                        <Link to="/" className="btn primary">
                          Tìm hiểu thêm
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="schedule">
          <div className="container">
            <div className="schedule-inner">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 ">
                  <div className="single-schedule first">
                    <div className="inner">
                      <div className="icon">
                        <i className="fa fa-ambulance"></i>
                      </div>
                      <div className="single-content">
                        <span>Lí do chọn chúng tôi</span>
                        <h4>Uy tín cao</h4>
                        <p>
                          Trải qua nhiều năm thành lập và phát triển.Chúng tôi
                          đặt uy tín của công ty lên hàng đầu.
                        </p>
                        <a href="/">
                          Tìm hiểu thêm
                          <i className="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-schedule middle">
                    <div className="inner">
                      <div className="icon">
                        <i className="icofont-prescription"></i>
                      </div>
                      <div className="single-content">
                        <span>Lí do chọn chúng tôi</span>
                        <h4>Nhanh chóng</h4>
                        <p>
                          Chúng tôi luôn mang tới những dịch vụ nhanh chóng và
                          tiện lợi tới với bạn chỉ cần click chuột .
                        </p>
                        <a href="#">
                          Tìm hiểu thêm
                          <i className="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <div className="single-schedule last">
                    <div className="inner">
                      <div className="icon">
                        <i className="icofont-ui-clock"></i>
                      </div>
                      <div className="single-content">
                        <span>Lí do chọn chúng tôi</span>
                        <h4>Gói bảo hiểm giá hợp lí</h4>
                        <p>
                          Chúng tôi mang đến cho bạn nhiều gói bảo hiểm với giá
                          cả hợp lí với nhiều tùy chọn.
                        </p>
                        <a href="#">
                          LEARN MORE<i className="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont icofont-home"></i>
                  <div className="content">
                    <span className="counter">15</span>
                    <p>Chi nhánh giao dịch toàn quốc</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont icofont-user-alt-3"></i>
                  <div className="content">
                    <span className="counter">420</span>
                    <p>Nhân viên</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont-simple-smile"></i>
                  <div className="content">
                    <span className="counter">4379</span>
                    <p>Khách hàng</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont icofont-table"></i>
                  <div className="content">
                    <span className="counter">15</span>
                    <p>Năm kinh nghiệm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="appointment" id="appointment">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Nếu bạn còn gì thắc mắc, liên hệ ngay với chúng tôi</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Chúng tôi sẽ phản hồi bạn sớm nhất có thể vào Gmail của bạn
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="form" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          placeholder="Họ Tên"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Số điện thoại"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Lời nhắn....."
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-md-4 col-12">
                      <div className="form-group">
                        <div className="button">
                          <button
                            type="submit"
                            className="btn"
                            onClick={handleResponse}
                          >
                            Gửi phản hồi
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-8 col-12"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <div className="appointment-image">
                  <img src="img/contact-img.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter section">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6  col-12">
                <div className="subscribe-text ">
                  <h6>Sign up for newsletter</h6>
                  <p className="">
                    Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                    <br /> homero alterum.
                  </p>
                </div>
              </div>
              <div className="col-lg-6  col-12">
                <div className="subscribe-form ">
                  <form
                    action="mail/mail.php"
                    method="get"
                    target="_blank"
                    className="newsletter-inner"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Your email address"
                      className="common-input"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your email address'"
                      required=""
                      type="email"
                    />
                    <button className="btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
