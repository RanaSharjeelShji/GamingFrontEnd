import React, { useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPost = () => {
  const navigate = useNavigate();
  // formData
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    price: "",
  });

  // onchange

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  // Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("auth_token");
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    axios
      .post("http://localhost:8000/api/product/store", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Product added successfully!");
          setFormData({
            name: "",
            image: null,
            price: "",
          });
          setTimeout(() => {
            navigate("/list");
          }, 1000);
        } else {
          toast.error("Error adding product. Please try again.");
          console.error("Error");
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error("error...!");
        }
        console.error(error);
      });
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <section class="single-banner dashboard-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="single-content">
                <h2>add product</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    add-product
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="adpost-part">
        <div className="mx-5">
          <div className="row">
            <div className="col-lg-12">
              <form className="adpost-form" onSubmit={handleSubmit}>
                <div className="adpost-card">
                  <div className="adpost-title">
                    <h3>Add Product</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-label">Product Title</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your product title here"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-label">Product Image</label>
                        <input
                          type="file"
                          className="form-control"
                          name="image"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-label">Price</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter your pricing amount"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="add-more px-4 py-2 d-flex align-items-center justify-content-center"
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AddPost;
