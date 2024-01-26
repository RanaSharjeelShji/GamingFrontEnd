import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
    <Header/>
      <section className="single-banner dashboard-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-content">
                <h2>dashboard</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    dashboard
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dash-header-part">
        <div className="container">
          <div className="dash-header-card">
            <div className="row">
              <div className="col-lg-5">
                <div className="dash-header-left">
                  <div className="dash-avatar">
                    <a href="a">
                      <img src="images/avatar/01.jpg" alt="avatar" />
                    </a>
                  </div>
                  <div className="dash-intro">
                    <h4>
                      <a href="a">gackon Honson</a>
                    </h4>
                    <h5>new seller</h5>
                    <ul className="dash-meta">
                      <li>
                        <i className="fas fa-phone-alt"></i>
                        <span>(123) 000-1234</span>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <span>gackon@gmail.com</span>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Los Angeles, West America</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="dash-header-right">
                  <div className="dash-focus dash-list">
                    <h2>2433</h2>
                    <p>listing ads</p>
                  </div>
                  <div className="dash-focus dash-book">
                    <h2>2433</h2>
                    <p>total follower</p>
                  </div>
                  <div className="dash-focus dash-rev">
                    <h2>2433</h2>
                    <p>total review</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="dash-header-alert alert fade show">
                  <p>
                    From your account dashboard. you can easily check & view
                    your recent orders, manage your shipping and billing
                    addresses and Edit your password and account details.
                  </p>
                  <button data-dismiss="alert">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="dash-menu-list">
                <ul>
                    <li>
                      <Link to="/dashboard" className="active">dashboard</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
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
      <section className="dashboard-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="account-card alert fade show">
                <div className="account-title">
                  <h3>Newsletter</h3>
                  <button data-dismiss="alert">close</button>
                </div>
                <div className="dash-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore enim illum quos sed dolore iusto necessitatibus ut
                    voluptatibus repellat Eaque molestiae cum laborum nobis
                    quidem vel modi ab quam ipsum eligendi excepturi reiciendis
                    aspernatur veniam ex. Debitis excepturi atque. Ducimus
                    dignissimos. Illo ut dolorem in vel blanditiis facere
                    aliquid ipsum.
                  </p>
                </div>
              </div>
              <div className="account-card alert fade show">
                <div className="account-title">
                  <h3>Reviews</h3>
                  <button data-dismiss="alert">close</button>
                </div>
                <div className="dash-review-widget">
                  <h4>(4) Unread Review</h4>
                  <select className="custom-select">
                    <option selected>Unread Review</option>
                    <option value="1">All Review</option>
                    <option value="2">5 Star Review</option>
                    <option value="3">4 Star Review</option>
                    <option value="3">3 Star Review</option>
                    <option value="3">2 Star Review</option>
                    <option value="3">1 Star Review</option>
                  </select>
                </div>
                <ul className="review-list">
                  <li className="review-item">
                    <div className="review-user">
                      <div className="review-head">
                        <div className="review-profile">
                          <a href="a" className="review-avatar">
                            <img src="images/avatar/03.jpg" alt="review" />
                          </a>
                          <div className="review-meta">
                            <h6>
                              <a href="a">miron mahmud -</a>
                              <span>June 02, 2020</span>
                            </h6>
                            <ul>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <h5>- for delivery system</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="review-widget">
                          <button className="review-dots-btn">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <ul className="review-widget-list">
                            <li>
                              <a href="a">
                                <i className="fas fa-trash-alt"></i>Delete
                              </a>
                            </li>
                            <li>
                              <a href="a">
                                <i className="fas fa-flag"></i>Report
                              </a>
                            </li>
                            <li>
                              <a href="a">
                                <i className="fas fa-shield-alt"></i>Block
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="review-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Non quibusdam harum ipsum dolor cumque quas magni
                        voluptatibus cupiditate minima quis.
                      </p>
                    </div>
                  </li>
                  <li className="review-item">
                    <div className="review-user">
                      <div className="review-head">
                        <div className="review-profile">
                          <a href="a" className="review-avatar">
                            <img src="images/avatar/02.jpg" alt="review" />
                          </a>
                          <div className="review-meta">
                            <h6>
                              <a href="a">labonno khan -</a>
                              <span>June 02, 2020</span>
                            </h6>
                            <ul>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <i className="fas fa-star active"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <h5>- for product quality</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="review-widget">
                          <button className="review-dots-btn">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <ul className="review-widget-list">
                            <li>
                              <a href="a">
                                <i className="fas fa-trash-alt"></i>Delete
                              </a>
                            </li>
                            <li>
                              <a href="a">
                                <i className="fas fa-flag"></i>Report
                              </a>
                            </li>
                            <li>
                              <a href="a">
                                <i className="fas fa-shield-alt"></i>Block
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="review-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Non quibusdam harum ipsum dolor cumque quas magni
                        voluptatibus cupiditate minima quis.
                      </p>
                    </div>
                    <div className="review-author">
                      <div className="review-head">
                        <div className="review-profile">
                          <a href="a" className="review-avatar">
                            <img src="images/avatar/04.jpg" alt="review" />
                          </a>
                          <div className="review-meta">
                            <h6>
                              <a href="a">Miron Mahmud</a>
                            </h6>
                            <h6>
                              Author - <span>June 02, 2020</span>
                            </h6>
                          </div>
                        </div>
                        <div className="review-widget">
                          <button className="review-dots-btn">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <ul className="review-widget-list">
                            <li>
                              <a href="a">
                                <i className="fas fa-edit"></i>Edit
                              </a>
                            </li>
                            <li>
                              <a href="a">
                                <i className="fas fa-trash-alt"></i>Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="review-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Non quibusdam harum ipsum dolor cumque quas magni
                        voluptatibus cupiditate minima.
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="a">
                      <i className="fas fa-long-arrow-alt-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="a">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="a">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="a">
                      3
                    </a>
                  </li>
                  <li className="page-item">...</li>
                  <li className="page-item">
                    <a className="page-link" href="a">
                      67
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="a">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="account-card alert fade show">
                <div className="account-title">
                  <h3>Membership</h3>
                  <button data-dismiss="alert">close</button>
                </div>
                <ul className="account-card-list">
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
              <div className="account-card alert fade show">
                <div className="account-title">
                  <h3>Current Info</h3>
                  <button data-dismiss="alert">close</button>
                </div>
                <ul className="account-card-list">
                  <li>
                    <h5>Active Ads</h5>
                    <h6>3</h6>
                  </li>
                  <li>
                    <h5>Booking Ads</h5>
                    <h6>0</h6>
                  </li>
                  <li>
                    <h5>Rental Ads</h5>
                    <h6>1</h6>
                  </li>
                  <li>
                    <h5>Sales Ads</h5>
                    <h6>2</h6>
                  </li>
                </ul>
              </div>
              <div className="account-card alert fade show">
                <div className="account-title">
                  <h3>Fun fact</h3>
                  <button data-dismiss="alert">close</button>
                </div>
                <div className="account-card-content">
                  <p>
                    Your last ad running was 3 days ago and only have 5 hours
                    left until your last ad expires.
                  </p>
                </div>
              </div>
              <div className="account-card alert fade show">
                <div className="account-title">
                  <h3>Resources</h3>
                  <button data-dismiss="alert">close</button>
                </div>
                <ul className="account-card-link">
                  <li>
                    <a href="a">
                      <i className="fas fa-dot-circle"></i>
                      <span>Asset Use Guidelines</span>
                    </a>
                  </li>
                  <li>
                    <a href="a">
                      <i className="fas fa-dot-circle"></i>
                      <span>Authoring Tutorial</span>
                    </a>
                  </li>
                  <li>
                    <a href="a">
                      <i className="fas fa-dot-circle"></i>
                      <span>Knowledgebase</span>
                    </a>
                  </li>
                  <li>
                    <a href="a">
                      <i className="fas fa-dot-circle"></i>
                      <span>Watermarks</span>
                    </a>
                  </li>
                  <li>
                    <a href="a">
                      <i className="fas fa-dot-circle"></i>
                      <span>Selling Tips</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="currency">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Choose a Currency</h4>
              <button className="fas fa-times" data-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <button className="modal-link active">
                United States Doller (USD) - $
              </button>
              <button className="modal-link">Euro (EUR) - €</button>
              <button className="modal-link">British Pound (GBP) - £</button>
              <button className="modal-link">Australian Dollar (AUD) - A$</button>
              <button className="modal-link">Canadian Dollar (CAD) - C$</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="language">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Choose a Language</h4>
              <button className="fas fa-times" data-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <button className="modal-link active">English</button>
              <button className="modal-link">bangali</button>
              <button className="modal-link">arabic</button>
              <button className="modal-link">germany</button>
              <button className="modal-link">spanish</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
