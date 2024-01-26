import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <Header />
      <section class="single-banner dashboard-banner">
        <div class="mx-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="single-content">
                <h2>profile</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    profile
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="dash-header-part">
        <div class="mx-5">
          <div class="dash-header-card">
            <div class="row">
              <div class="col-lg-5">
                <div class="dash-header-left">
                  <div class="dash-avatar">
                    <a href="#">
                      <img src="images/avatar/01.jpg" alt="avatar" />
                    </a>
                  </div>
                  <div class="dash-intro">
                    <h4>
                      <a href="#">gackon Honson</a>
                    </h4>
                    <h5>new seller</h5>
                    <ul class="dash-meta">
                      <li>
                        <i class="fas fa-phone-alt"></i>
                        <span>(123) 000-1234</span>
                      </li>
                      <li>
                        <i class="fas fa-envelope"></i>
                        <span>gackon@gmail.com</span>
                      </li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Los Angeles, West America</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="dash-header-right">
                  <div class="dash-focus dash-list">
                    <h2>2433</h2>
                    <p>listing ads</p>
                  </div>
                  <div class="dash-focus dash-book">
                    <h2>2433</h2>
                    <p>total follower</p>
                  </div>
                  <div class="dash-focus dash-rev">
                    <h2>2433</h2>
                    <p>total review</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="dash-header-alert alert fade show">
                  <p>
                    From your account dashboard. you can easily check & view
                    your recent orders, manage your shipping and billing
                    addresses and Edit your password and account details.
                  </p>
                  <button data-dismiss="alert">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="dash-menu-list">
                <ul>
                    <li>
                      <Link to="/dashboard">dashboard</Link>
                    </li>
                    <li>
                      <Link to="/profile" className="active">Profile</Link>
                    </li>
                    <li>
                      <Link to="/add-post">ad post</Link>
                    </li>
                    <li>
                      <Link to="/buy">my ads</Link>
                    </li>
                    <li>
                      <Link  to="/settings">
                        settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/favorites">bookmarks</Link>
                    </li>
                    <li>
                      <Link to="/login">logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="profile-part mt-5">
        <div class="mx-5">
          <div class="row">
            <div class="col-lg-6">
              <div class="account-card">
                <div class="account-title">
                  <h3>Membership</h3>
                  <a href="setting.html">Edit</a>
                </div>
                <ul class="account-card-list">
                  <li>
                    <h5>Status</h5>
                    <p>Premium</p>
                  </li>
                  <li>
                    <h5>Joined</h5>
                    <p>February 02, 2021</p>
                  </li>
                  <li>
                    <h5>Spand</h5>
                    <p>4,587</p>
                  </li>
                  <li>
                    <h5>Earn</h5>
                    <p>97,325</p>
                  </li>
                </ul>
              </div>
              <div class="account-card">
                <div class="account-title">
                  <h3>Contact Info</h3>
                  <a href="setting.html">Edit</a>
                </div>
                <ul class="account-card-list">
                  <li>
                    <h5>Website:</h5>
                    <p>www.richardwilliam.com</p>
                  </li>
                  <li>
                    <h5>Email:</h5>
                    <p>richard@example.com</p>
                  </li>
                  <li>
                    <h5>Phone:</h5>
                    <p>+12027953213</p>
                  </li>
                  <li>
                    <h5>Skype:</h5>
                    <p>live:richard</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="account-card">
                <div class="account-title">
                  <h3>Billing Address</h3>
                  <a href="setting.html">Edit</a>
                </div>
                <ul class="account-card-list">
                  <li>
                    <h5>Post Code:</h5>
                    <p>1420</p>
                  </li>
                  <li>
                    <h5>State:</h5>
                    <p>West Jalkuri</p>
                  </li>
                  <li>
                    <h5>City:</h5>
                    <p>Narayanganj</p>
                  </li>
                  <li>
                    <h5>Country:</h5>
                    <p>Bangladesh</p>
                  </li>
                </ul>
              </div>
              <div class="account-card">
                <div class="account-title">
                  <h3>Shipping Address</h3>
                  <a href="setting.html">Edit</a>
                </div>
                <ul class="account-card-list">
                  <li>
                    <h5>Post Code:</h5>
                    <p>1100</p>
                  </li>
                  <li>
                    <h5>State:</h5>
                    <p>Kawran Bazar</p>
                  </li>
                  <li>
                    <h5>City:</h5>
                    <p>Dhaka</p>
                  </li>
                  <li>
                    <h5>Country:</h5>
                    <p>Bangladesh</p>
                  </li>
                </ul>
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

export default Profile;
