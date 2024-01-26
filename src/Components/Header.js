import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    const token = localStorage.getItem("auth_token");

    // Make a request to the logout API endpoint
    axios
      .post("http://localhost:8000/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        localStorage.removeItem("auth_token");
        navigate("/login");
      });
  };
  return (
    <>
      <header class="header-part">
        <div class="container">
          <div class="header-content">
            <div class="header-left">
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/">
                  <img width={35} src="/images/pexels/game.png" alt="" />
                </Link>
                <Link to="/">
                  <p
                    className="px-2"
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
              <button type="button" class="header-widget search-btn">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <form class="header-form">
              <ul className="d-flex">
                <Link to="/">
                  <li
                    className="px-3"
                    style={{ color: "#0044BB", fontWeight: "500" }}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li
                    className="px-3"
                    style={{ color: "#0044BB", fontWeight: "500" }}
                  >
                    About
                  </li>
                </Link>
                <Link to="/contact">
                  <li
                    className="px-3"
                    style={{ color: "#0044BB", fontWeight: "500" }}
                  >
                    Contact Us
                  </li>
                </Link>
              </ul>
              <div class="header-option">
                <div class="option-grid">
                  <div class="option-group">
                    <input type="text" placeholder="City" />
                  </div>
                  <div class="option-group">
                    <input type="text" placeholder="State" />
                  </div>
                  <div class="option-group">
                    <input type="text" placeholder="Min Price" />
                  </div>
                  <div class="option-group">
                    <input type="text" placeholder="Max Price" />
                  </div>
                  <button type="submit">
                    <i class="fas fa-search"></i>
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </form>
            <div class="header-right">
              <Link to="/add-post" class="btn btn-inline post-btn">
                <i class="fas fa-plus-circle"></i>
                <span>post Product</span>
              </Link>
            </div>
            <div class="header-right ml-3" onClick={logout}>
              <button class="btn btn-inline bg-transparent text-primary">
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <aside class="sidebar-part">
        <div class="sidebar-body">
          <div class="sidebar-header">
            <a href="index.html" class="sidebar-logo">
              <img src="images/logo.png" alt="logo" />
            </a>
            <button class="sidebar-cross">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="sidebar-content">
            <div class="sidebar-profile">
              <h4>
                <a href="#" class="sidebar-name">
                  Jackon Honson
                </a>
              </h4>
              <a href="ad-post.html" class="btn btn-inline sidebar-post">
                <i class="fas fa-plus-circle"></i>
                <span>post your ad</span>
              </a>
            </div>
            <div class="sidebar-menu">
              <ul class="nav nav-tabs">
                <li>
                  <a
                    href="#main-menu"
                    class="nav-link active"
                    data-toggle="tab"
                  >
                    Main Menu
                  </a>
                </li>
                <li>
                  <a href="#author-menu" class="nav-link" data-toggle="tab">
                    Author Menu
                  </a>
                </li>
              </ul>
              <div class="tab-pane active" id="main-menu">
                <ul class="navbar-list">
                  <li class="navbar-item">
                    <a class="navbar-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li class="navbar-item navbar-dropdown">
                    <a class="navbar-link" href="#">
                      <span>Categories</span>
                      <i class="fas fa-plus"></i>
                    </a>
                    <ul class="dropdown-list">
                      <li>
                        <a class="dropdown-link" href="category-list.html">
                          category list
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="category-details.html">
                          category details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-item navbar-dropdown">
                    <a class="navbar-link" href="#">
                      <span>Advertise List</span>
                      <i class="fas fa-plus"></i>
                    </a>
                    <ul class="dropdown-list">
                      <li>
                        <a class="dropdown-link" href="ad-list-column3.html">
                          ad list column 3
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="ad-list-column2.html">
                          ad list column 2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="ad-list-column1.html">
                          ad list column 1
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-item navbar-dropdown">
                    <a class="navbar-link" href="#">
                      <span>Advertise details</span>
                      <i class="fas fa-plus"></i>
                    </a>
                    <ul class="dropdown-list">
                      <li>
                        <a class="dropdown-link" href="ad-details-grid.html">
                          ad details grid
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="ad-details-left.html">
                          ad details left
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="ad-details-right.html">
                          ad details right
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-item navbar-dropdown">
                    <a class="navbar-link" href="#">
                      <span>Pages</span>
                      <i class="fas fa-plus"></i>
                    </a>
                    <ul class="dropdown-list">
                      <li>
                        <a class="dropdown-link" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="compare.html">
                          Ad Compare
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="cities.html">
                          Ad by Cities
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="price.html">
                          Pricing Plan
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="user-form.html">
                          User Form
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="404.html">
                          404
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-item navbar-dropdown">
                    <a class="navbar-link" href="#">
                      <span>blogs</span>
                      <i class="fas fa-plus"></i>
                    </a>
                    <ul class="dropdown-list">
                      <li>
                        <a class="dropdown-link" href="blog-list.html">
                          Blog list
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-link" href="blog-details.html">
                          blog details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-item">
                    <a class="navbar-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-pane" id="author-menu">
                <ul className="d-flex">
                  <Link to="/">
                    <li
                      className="px-3"
                      style={{ color: "#0044BB", fontWeight: "500" }}
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/buy">
                    <li
                      className="px-3"
                      style={{ color: "#0044BB", fontWeight: "500" }}
                    >
                      Store
                    </li>
                  </Link>
                  <Link to="/about">
                    <li
                      className="px-3"
                      style={{ color: "#0044BB", fontWeight: "500" }}
                    >
                      About
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li
                      className="px-3"
                      style={{ color: "#0044BB", fontWeight: "500" }}
                    >
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div class="sidebar-footer">
              <p>
                All Rights Reserved By <a href="#">Classicads</a>
              </p>
              <p>
                Developed By
                <a href="https://themeforest.net/user/mironcoder">Mironcoder</a>
              </p>
            </div>
          </div>
        </div>
      </aside>
      <nav class="mobile-nav">
        <div class="container">
          <div class="mobile-group">
            <a href="index.html" class="mobile-widget">
              <i class="fas fa-home"></i>
              <span>home</span>
            </a>

            <a href="ad-post.html" class="mobile-widget plus-btn">
              <i class="fas fa-plus"></i>
              <span>Ad Post</span>
            </a>
            <a href="notification.html" class="mobile-widget">
              <i class="fas fa-bell"></i>
              <span>notify</span>
              <sup>0</sup>
            </a>
            <a href="message.html" class="mobile-widget">
              <i class="fas fa-envelope"></i>
              <span>message</span>
              <sup>0</sup>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
