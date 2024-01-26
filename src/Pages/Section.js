import React from "react";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import {
  Navigation,
  FreeMode,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
const Section = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("auth_token");
        if (token) {
          const response = await axios.get(
            "http://localhost:8000/api/product/list",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const slicedData = response.data.data.slice(0, 5);
          setList(slicedData);
          console.log(slicedData, "list");
        } else {
          console.error("Token not found in local storage");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <section class="banner-part">
        <div class="mx-5">
          <div class="banner-content">
            <h1>#Buy and #Sell to Level Up Your Gaming Arsenal!</h1>
            <p>
              Explore and Buy or Sell Everything Gaming and Tech in One Dynamic
              Hub!
            </p>
          </div>
        </div>
      </section>
      <section class="suggest-part">
        <div class="mx-5">
          <div class="suggest-slider slider-arrow d-flex justify-content-between flex-wrap">
            <Link to="/list" class="suggest-card p-5">
              <img
                src="/images/pexels/headset.png"
                alt="car"
                style={{ borderRadius: "10px" }}
              />
              <h6>Headsets</h6>
              <p>(21) supply</p>
            </Link>
            <Link to="/list" class="suggest-card p-5">
              <img
                src="/images/pexels/keyboards.png"
                alt="furniture"
                style={{ borderRadius: "10px" }}
              />
              <h6>Keyboards</h6>
              <p>(10) supply</p>
            </Link>
            <Link to="/list" class="suggest-card p-5">
              <img src="images/pexels/glasses.png" alt="house" />
              <h6>Glasses</h6>
              <p>(234) supply</p>
            </Link>
            <Link to="/list" class="suggest-card p-5">
              <img src="images/pexels/joystick.png" alt="food" />
              <h6>Controllers</h6>
              <p>(8) supply</p>
            </Link>
            <Link to="/list" class="suggest-card p-5">
              <img src="images/pexels/armchair.png" alt="cycle" />
              <h6>Chairs</h6>
              <p>(7) supply</p>
            </Link>
            <Link to="/list" class="suggest-card p-5">
              <img src="images/pexels/web-analytics.png" alt="clothes" />
              <h6>Monitors</h6>
              <p>(17) supply</p>
            </Link>
          </div>
        </div>
      </section>
      <section class="section trend-part">
        <div class="mx-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-center-heading">
                <h2>
                  Popular Trending <span>Products</span>
                </h2>
                <p>
                  Discover the Latest in Gaming Excellence with Our Trendsetting
                  Products!
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-11 col-lg-8 col-xl-6">
              <div class="product-card standard">
                <div class="product-media">
                  <div class="product-imgs" style={{ height: "40vh",width:'250px' }}>
                    <img
                      src="images/pexels/game-8.jpg"
                      width="100%"
                      height="100%"
                      alt="product"
                    />
                  </div>
                  <ul class="product-action">
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <span>4.5/7</span>
                    </li>
                  </ul>
                </div>
                <div class="product-content">
                  <h5 class="product-title">
                    <Link to="/list">
                      Hard Disk
                    </Link>
                  </h5>
                  <div class="product-meta">
                    <span>
                      <i class="fas fa-map-marker-alt"></i>Uttara, Dhaka
                    </span>
                    <span>
                      <i class="fas fa-clock"></i>30 min ago
                    </span>
                  </div>
                  <div class="product-info">
                    <h5 class="product-price">
                      Rupees: 974
                    </h5>
                    <div class="product-btn">
                      <a
                        href="compare.html"
                        title="Compare"
                        class="fas fa-compress"
                      ></a>
                      <button
                        type="button"
                        title="Wishlist"
                        class="far fa-heart"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-11 col-lg-8 col-xl-6">
              <div class="product-card standard">
                <div class="product-media">
                  <div class="product-imgs" style={{ height: "40vh",width:'250px' }}>
                    <img
                      src="images/pexels/game-7.jpg"
                      width="100%"
                      height="100%"
                      alt="product"
                    />
                  </div>
                  <ul class="product-action">
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <span>4.5/7</span>
                    </li>
                  </ul>
                </div>
                <div class="product-content">
                  <h5 class="product-title">
                    <Link to="/list">
                      Drives
                    </Link>
                  </h5>
                  <div class="product-meta">
                    <span>
                      <i class="fas fa-map-marker-alt"></i>Uttara, Dhaka
                    </span>
                    <span>
                      <i class="fas fa-clock"></i>30 min ago
                    </span>
                  </div>
                  <div class="product-info">
                    <h5 class="product-price">
                      Rupees: 384
                    </h5>
                    <div class="product-btn">
                      <a
                        href="compare.html"
                        title="Compare"
                        class="fas fa-compress"
                      ></a>
                      <button
                        type="button"
                        title="Wishlist"
                        class="far fa-heart"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-11 col-lg-8 col-xl-6">
              <div class="product-card standard">
                <div class="product-media">
                  <div class="product-imgs" style={{ height: "40vh",width:'250px' }}>
                    <img
                      src="images/pexels/game-3.jpg"
                      width="100%"
                      height="100%"
                      alt="product"
                    />
                  </div>
                  <ul class="product-action">
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <span>4.5/7</span>
                    </li>
                  </ul>
                </div>
                <div class="product-content">
                  <h5 class="product-title">
                    <Link to="/list">
                      Accesories
                    </Link>
                  </h5>
                  <div class="product-meta">
                    <span>
                      <i class="fas fa-map-marker-alt"></i>Uttara, Dhaka
                    </span>
                    <span>
                      <i class="fas fa-clock"></i>30 min ago
                    </span>
                  </div>
                  <div class="product-info">
                    <h5 class="product-price">
                      Rupees: 78
                    </h5>
                    <div class="product-btn">
                      <a
                        href="compare.html"
                        title="Compare"
                        class="fas fa-compress"
                      ></a>
                      <button
                        type="button"
                        title="Wishlist"
                        class="far fa-heart"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-11 col-lg-8 col-xl-6">
              <div class="product-card standard">
                <div class="product-media">
                  <div class="product-imgs" style={{ height: "40vh",width:'250px' }}>
                    <img
                      src="images/pexels/game-4.jpg"
                      width="100%"
                      height="100%"
                      alt="product"
                    />
                  </div>
                  <ul class="product-action">
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <span>4.5/7</span>
                    </li>
                  </ul>
                </div>
                <div class="product-content">
                  <h5 class="product-title">
                    <Link to="/list">
                     Monitors
                    </Link>
                  </h5>
                  <div class="product-meta">
                    <span>
                      <i class="fas fa-map-marker-alt"></i>Uttara, Dhaka
                    </span>
                    <span>
                      <i class="fas fa-clock"></i>30 min ago
                    </span>
                  </div>
                  <div class="product-info">
                    <h5 class="product-price">
                      Rupees: 756
                    </h5>
                    <div class="product-btn">
                      <a
                        href="compare.html"
                        title="Compare"
                        class="fas fa-compress"
                      ></a>
                      <button
                        type="button"
                        title="Wishlist"
                        class="far fa-heart"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-11 col-lg-8 col-xl-6">
              <div class="product-card standard">
                <div class="product-media">
                  <div class="product-imgs" style={{ height: "40vh",width:'250px' }}>
                    <img
                      src="images/pexels/game-08.jpg"
                      width="100%"
                      height="100%"
                      alt="product"
                    />
                  </div>
                  <ul class="product-action">
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <span>4.5/7</span>
                    </li>
                  </ul>
                </div>
                <div class="product-content">
                  <h5 class="product-title">
                    <Link to="/list">
                      Lorem ipsum dolor sit amet consect adipisicing elit
                    </Link>
                  </h5>
                  <div class="product-meta">
                    <span>
                      <i class="fas fa-map-marker-alt"></i>Uttara, Dhaka
                    </span>
                    <span>
                      <i class="fas fa-clock"></i>30 min ago
                    </span>
                  </div>
                  <div class="product-info">
                    <h5 class="product-price">
                      $Rupees: 45
                    </h5>
                    <div class="product-btn">
                      <a
                        href="compare.html"
                        title="Compare"
                        class="fas fa-compress"
                      ></a>
                      <button
                        type="button"
                        title="Wishlist"
                        class="far fa-heart"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-11 col-lg-8 col-xl-6">
              <div class="product-card standard">
                <div class="product-media">
                  <div class="product-imgs" style={{ height: "40vh",width:'250px' }}>
                    <img
                      src="images/pexels/game-6.jpg"
                      width="100%"
                      height="100%"
                      alt="product"
                    />
                  </div>

                  <ul class="product-action">
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <span>4.5/7</span>
                    </li>
                  </ul>
                </div>
                <div class="product-content">
                  <h5 class="product-title">
                    <Link to="/list">
                      Lorem ipsum dolor sit amet consect adipisicing elit
                    </Link>
                  </h5>
                  <div class="product-meta">
                    <span>
                      <i class="fas fa-map-marker-alt"></i>Uttara, Dhaka
                    </span>
                    <span>
                      <i class="fas fa-clock"></i>30 min ago
                    </span>
                  </div>
                  <div class="product-info">
                    <h5 class="product-price">
                      Rupees: 75
                    </h5>
                    <div class="product-btn">
                      <a
                        href="compare.html"
                        title="Compare"
                        class="fas fa-compress"
                      ></a>
                      <button
                        type="button"
                        title="Wishlist"
                        class="far fa-heart"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="intro-part">
        <div class="mx-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-center-heading">
                <h2>Ready to Sell? Sell Your Gaming Treasures with Us!?</h2>
                <p>
                  Level Up Your Visibility - Unleash Your Gaming Products to the
                  Enthusiastic Community!
                </p>
                <Link to="/add-post" class="btn btn-outline">
                  <i class="fas fa-plus-circle"></i>
                  <span>post Product</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-part">
        <div class="mx-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-center-heading">
                <h2>
                  Read Our <span>Recent Articles</span>
                </h2>
                <p>
                  Dive into the Latest Gaming Buzz - Explore Our Recent Articles
                  Now!
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              cssMode={true}
              // navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, FreeMode, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {list.map((e) => (
                <SwiperSlide key={e.id}>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src={e.image} alt="blog" />
                      <div className="blog-overlay">
                        <span className="safety">safety</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <Link to="#" className="blog-avatar">
                        <img src={e.image} alt="avatar" />
                      </Link>
                      <ul className="blog-meta">
                        <li>
                          <i className="fas fa-clock"></i>
                          <p>02 Feb 2021</p>
                        </li>
                      </ul>
                      <div className="blog-text d-flex justify-content-between">
                        <h4>
                          <Link to="/list">{e.name}</Link>
                        </h4>
                        <p>Rupees: {e.price}</p>
                      </div>
                      <Link to="/list" className="blog-read">
                        <span>read more</span>
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="blog-btn">
                <Link to="/list" class="btn btn-inline">
                  <i class="fas fa-eye"></i>
                  <span>view all</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="modal fade" id="currency">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Choose a Currency</h4>
              <button class="fas fa-times" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <button class="modal-link active">
                United States Doller (USD) - $
              </button>
              <button class="modal-link">Euro (EUR) - €</button>
              <button class="modal-link">British Pound (GBP) - £</button>
              <button class="modal-link">Australian Dollar (AUD) - A$</button>
              <button class="modal-link">Canadian Dollar (CAD) - C$</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="language">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Choose a Language</h4>
              <button class="fas fa-times" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <button class="modal-link active">English</button>
              <button class="modal-link">bangali</button>
              <button class="modal-link">arabic</button>
              <button class="modal-link">germany</button>
              <button class="modal-link">spanish</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Section;
