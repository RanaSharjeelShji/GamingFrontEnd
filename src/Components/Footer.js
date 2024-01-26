import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer class="footer-part">
        <div class="px-5">
          <div class="row pb-5 d-flex flex-row-reverse">
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="footer-content">
                <h3>Contact Us</h3>
                <ul class="footer-address">
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>UCP Lahore</p>
                  </li>
                  <li className="d-flex align-items-center">
                    <i class="fas fa-envelope"></i>
                    <p className="pt-1">GameTradeHub@gamil.com</p>
                  </li>
                  <li>
                    <i class="fas fa-phone-alt"></i>
                    <p className="pt-1">03091697094</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="footer-content">
                <h3>Quick Links</h3>
                <ul class="footer-widget">
                  <li>
                    <a href="/list">Store</a>
                  </li>
                  {/* <li><a href="a">Orders Tracking</a></li>
                <li><a href="a">My Account</a></li>
                <li><a href="a">Size Guide</a></li>
                <li><a href="a">Faq</a></li> */}
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="footer-content">
                <h3>Information</h3>
                <ul class="footer-widget">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="footer-info">
                <Link to="/">
                  <div className="d-flex align-items-center">
                    <img
                      width={35}
                      src="/images/pexels/game.png"
                      className="pb-3"
                      alt=""
                    />
                    <Link>
                      <p
                        className="px-2 pt-2"
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.8rem",
                          color: "#0044BB",
                        }}
                      >
                        GameTradeHub<span style={{ color: "#6F6FFF" }}></span>
                      </p>
                    </Link>
                  </div>
                </Link>
                <ul class="footer-count">
                  <li>
                    <h5>5674</h5>
                    <p>Registered Users</p>
                  </li>
                  <li>
                    <h5>24276</h5>
                    <p>Products</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
