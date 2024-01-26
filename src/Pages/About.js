import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const About = () => {
  return (
    <div>
      <Header />
      <section class="single-banner">
        <div class="mx-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="single-content">
                <h2>about company</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    about
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="best-part">
        <div className="mx-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-center-heading">
                <h2>Why Choose Us for Buying and Selling?</h2>
                <p>
                Elevate your deals with us – a secure and user-friendly marketplace where buying and selling meets extraordinary ease!
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="best-card">
                <div class="best-icon">
                  <i class="fas fa-boxes"></i>
                </div>
                <div class="best-content">
                  <h4>Trusted Transactions</h4>
                  Experience peace of mind with our secure platform, ensuring your buying and selling transactions are safeguarded at every step.
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="best-card">
                <div class="best-icon">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="best-content">
                  <h4>User-Friendly Interface</h4>
                  Navigate our intuitive and easy-to-use interface, making your journey of buying and selling a breeze for both beginners and seasoned users.
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="best-card">
                <div class="best-icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <div class="best-content">
                  <h4>Vast Marketplace</h4>
                  Unlock a diverse and extensive marketplace where you can explore a wide range of products, connecting buyers and sellers seamlessly.
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="best-card">
                <div class="best-icon">
                  <i class="fas fa-bell"></i>
                </div>
                <div class="best-content">
                  <h4>Secure Payment Options</h4>
                  Enjoy peace of mind with our secure payment options, ensuring the safety of your financial transactions during every purchase.
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="best-card">
                <div class="best-icon">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="best-content">
                  <h4>Continuous Improvement</h4>
                  We are committed to continual improvement, regularly updating our platform to meet the evolving needs of our users and provide the best possible service.
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="best-card">
                <div class="best-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="best-content">
                  <h4>Reliable Support</h4>
                  Count on our dedicated customer support team, ready to assist and resolve any queries, providing a reliable and supportive environment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="team-part">
        <div className="mx-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-center-heading">
                <h2>Behind The Classicads Team</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  aspernatur illum vel sunt libero voluptatum repudiandae veniam
                  maxime tenetur.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
              <div class="team-card">
                <img src="images/team/01.jpg" alt="team" />
                <h5>
                  <a href="javascript:void()">Jhonson Hononr</a>
                </h5>
                <p>Founder & CEO</p>
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
              <div class="team-card">
                <img src="images/team/02.jpg" alt="team" />
                <h5>
                  <a href="javascript:void()">Jhonson Hononr</a>
                </h5>
                <p>Founder & CEO</p>
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
              <div class="team-card">
                <img src="images/team/03.jpg" alt="team" />
                <h5>
                  <a href="javascript:void()">Jhonson Hononr</a>
                </h5>
                <p>Founder & CEO</p>
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
              <div class="team-card">
                <img src="images/team/04.jpg" alt="team" />
                <h5>
                  <a href="javascript:void()">Jhonson Hononr</a>
                </h5>
                <p>Founder & CEO</p>
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
              <div class="team-card">
                <img src="images/team/05.jpg" alt="team" />
                <h5>
                  <a href="javascript:void()">Jhonson Hononr</a>
                </h5>
                <p>Founder & CEO</p>
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
              <div class="team-card">
                <img src="images/team/06.jpg" alt="team" />
                <h5>
                  <a href="javascript:void()">Jhonson Hononr</a>
                </h5>
                <p>Founder & CEO</p>
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
              <div class="team-card">
                <img src="images/team/07.jpg" alt="team" />
                <h5>
                  <a href="javascript:void()">Jhonson Hononr</a>
                </h5>
                <p>Founder & CEO</p>
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="counter-part">
        <div>
          <div class="row">
            <div class="col-md-4 col-lg-4">
              <div class="counter-card">
                <div class="counter-image">
                  <img src="images/counter/user.png" alt="user" />
                </div>
                <div class="counter-content">
                  <h2>
                    <span class="counter-number">5674</span>+
                  </h2>
                  <p>Registered Users</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="counter-card">
                <div class="counter-image">
                  <img src="images/counter/ads.png" alt="user" />
                </div>
                <div class="counter-content">
                  <h2>
                    <span class="counter-number">24276</span>+
                  </h2>
                  <p>community ads</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="counter-card">
                <div class="counter-image">
                  <img src="images/counter/review.png" alt="user" />
                </div>
                <div class="counter-content">
                  <h2>
                    <span class="counter-number">3455</span>+
                  </h2>
                  <p>satisfied feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
