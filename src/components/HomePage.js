import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const HomePage = () => {
  const { user } = useContext(AppContext);
  console.log("user : ", user);
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
              style={{ backgroundImage: `./img/placeholder.png` }}
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
            {/* <div
              className="single-slider"
              style={{ backgroundImage: `./img/placeholder.png` }}
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
                        <a href="/ListInsurance" className="btn">
                          Đặt mua ngay
                        </a>
                        <a href="/" className="btn primary">
                          Tìm hiểu thêm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider"
              style={{ backgroundImage: `./img/placeholder.png` }}
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
                        <a href="/ListInsurance" className="btn">
                          Đặt mua ngay
                        </a>
                        <a href="#" className="btn primary">
                          Tìm hiểu thêm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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

        {/* <section className="why-choose section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Offer Different Services To Improve Your Health</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="choose-left">
                  <h3>Who We Are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pharetra antege vel est lobortis, a commodo magna
                    rhoncus. In quis nisi non emet quam pharetra commodo.{" "}
                  </p>
                  <p>
                    ClassName aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.{" "}
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list">
                        <li>
                          <i className="fa fa-caret-right"></i>Maecenas vitae
                          luctus nibh.{" "}
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Duis massa massa.
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Aliquam feugiat
                          interdum.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list">
                        <li>
                          <i className="fa fa-caret-right"></i>Maecenas vitae
                          luctus nibh.{" "}
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Duis massa massa.
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Aliquam feugiat
                          interdum.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="choose-right">
                  <div className="video-image">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                      </div>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                      className="video video-popup mfp-iframe"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="call-action overlay"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="content">
                  <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque porttitor dictum turpis nec gravida.
                  </p>
                  <div className="button">
                    <a href="#" className="btn">
                      Contact Now
                    </a>
                    <a href="#" className="btn second">
                      Learn More<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-table section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Provide You The Best Treatment In Resonable Price</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont icofont-ui-cut"></i>
                    </div>
                    <h4 className="title">Plastic Suggery</h4>
                    <div className="price">
                      <p className="amount">
                        $199<span>/ Per Visit</span>
                      </p>
                    </div>
                  </div>

                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check"></i>Lorem ipsum
                      dolor sit
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check"></i>Cubitur
                      sollicitudin fentum
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close"></i>Nullam
                      interdum enim
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close"></i>Donec
                      ultricies metus
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close"></i>Pellentesque
                      eget nibh
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <a className="btn" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont icofont-tooth"></i>
                    </div>
                    <h4 className="title">Teeth Whitening</h4>
                    <div className="price">
                      <p className="amount">
                        $299<span>/ Per Visit</span>
                      </p>
                    </div>
                  </div>

                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check"></i>Lorem ipsum
                      dolor sit
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check"></i>Cubitur
                      sollicitudin fentum
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check"></i>Nullam
                      interdum enim
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close"></i>Donec
                      ultricies metus
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close"></i>Pellentesque
                      eget nibh
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <a className="btn" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont-heart-beat"></i>
                    </div>
                    <h4 className="title">Heart Suggery</h4>
                    <div className="price">
                      <p className="amount">
                        $399<span>/ Per Visit</span>
                      </p>
                    </div>
                  </div>
                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check"></i>Lorem ipsum
                      dolor sit
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check"></i>Cubitur
                      sollicitudin fentum
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check"></i>Nullam
                      interdum enim
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check"></i>Donec
                      ultricies metus
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check"></i>Pellentesque
                      eget nibh
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <a className="btn" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <div className="clients overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="owl-carousel clients-slider">
                  <div className="single-clients">
                    <img src="img/client1.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client2.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client3.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client4.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client5.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client1.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client2.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client3.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client4.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
                <form className="form" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="name" type="text" placeholder="Họ Tên" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="email" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Số điện thoại"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Lời nhắn....."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-md-4 col-12">
                      <div className="form-group">
                        <div className="button">
                          <button type="submit" className="btn">
                            Gửi phản hồi
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-8 col-12"></div>
                  </div>
                </form>
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
