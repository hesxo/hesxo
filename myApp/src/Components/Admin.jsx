import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { storage } from "../Services/firebase-config";
import StockDataService from "../Services/Service";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import { v4 } from "uuid";
import { async } from "@firebase/util";

const Admin = () => {
  //form variables
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  //image uploading
  const [imageUpload, setimageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };

  //add  details
  const handleStockSubmit = async (e) => {
    e.preventDefault();
    const newStock = {
      product,
      category,
      price,
      description,
    };
    console.log(newStock);
    try {
      await StockDataService.addStock(newStock);
      alert("New Stock Added Successfully!");
      // navigate("/stocklist");
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setProduct("");
    setCategory("");
    setPrice("");
    setDescription("");
  };

  return (
    <div>
      Admin
      <Navbar />
      <div className="center">
        <form onSubmit={handleStockSubmit}>
          <div className="mb-3">
            <label htmlFor="product_name" className="form-label">
              Brand name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="product"
              placeholder="Name"
              defaultValue={product}
              onSelect={(e) => {
                setProduct(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="category" className="form-label">
              -select category-
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="product"
              placeholder="Category"
              defaultValue={category}
              onSelect={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product price
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="price"
              placeholder="Price"
              defaultValue={price}
              onSelect={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              defaultValue={description}
              onSelect={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-success Form-btn">
              Save
            </button>
          </div>
        </form>

        <div className="mb-3 top">
          <input
            className="form-control "
            type="file"
            id="formFile"
            onChange={(event) => {
              setimageUpload(event.target.files[0]);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={uploadImage}>
          Upload Image
        </button>
      </div>
    </div>
  );
};
export default Admin;
