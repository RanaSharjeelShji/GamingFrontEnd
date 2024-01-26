import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
const ColumnList = () => {
  const [list, setList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // list

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      axios
        .get("http://localhost:8000/api/product/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setList(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("");
    }
  }, []);

  // delete

  const removeItem = (id) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      axios
        .post(`http://localhost:8000/api/product/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setList((prevList) =>
            prevList.filter((product) => product.id !== id)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("err");
    }
  };

  return (
    <div>
      <Header />
      <section class="inner-section single-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="single-content">
                <h2>Products List</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Product List
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-5 list-header d-flex justify-content-between align-items-center">
        Showcase Our Unique Products
        <button
          onClick={() =>
            location.pathname === "/add-post"
              ? navigate(-1)
              : navigate("/add-post")
          }
          className="add-more px-4 py-2 d-flex align-items-center justify-content-center"
        >
          Add Product
        </button>
      </div>
      <section class="inner-section ad-list-part">
        <div class="row mx-5 list-max">
          {list?.map((product) => {
            return (
              <>
                <div class="col-4">
                  <div class="product-card">
                    <div class="product-media">
                      <div class="product-img">
                        <img src={product.image} height="100%" alt="product" />
                      </div>
                    </div>
                    <div class="product-content d-flex justify-content-between py-3 pt-4">
                      <h5 class="product-title">
                        <a href="ad-details-left.html">{product.name}</a>
                      </h5>
                      <h5 class="product-price">Rupees:{product.price}</h5>
                    </div>
                    <div
                      className="delete-item"
                      onClick={() => removeItem(product.id)}
                    >
                      <div>
                        <img src="/images/pexels/delete.png" width="20" />
                      </div>
                      <p className="pt-1 px-2">Discard</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ColumnList;
