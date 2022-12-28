import React from "react";
import Navbar from "./Navbar";
import StockDataService from "../Services/Service";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Updateform = () => {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState({ error: false, msg: " " });

  const handleStockSubmit = async (e) => {
    e.preventDefault();

    const newStock = {
      product,
      category,
      price,
      description,
    };
    //console.log(newStock)

    try {
      if (stockID !== undefined && stockID !== "") {
        await StockDataService.updateStock(stockID, newStock);
        alert("Update added successfully!");
        navigate("/stockupdateform");
      } else {
        navigate("/stocklist");
      }
    } catch (err) {
      setMessage({ error: false, msg: err.message });
    }
  };

  //FETCH DATA FROM FIRESTORE
  const { stockID } = useParams();
  console.log("Stock ID: ", stockID);

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await StockDataService.getStock(stockID);
      console.log("Got the Data: ", docSnap.data());
      setProduct(docSnap.data().product);
      setCategory(docSnap.data().category);
      setPrice(docSnap.data().price);
      setDescription(docSnap.data().description);
    } catch {}
  };

  useEffect(() => {
    console.log("Got ID: ", stockID);
    if (stockID !== undefined && stockID !== "") {
      editHandler();
      console.log("Check ", stockID);
    }
  }, [stockID]);

  return (
    <div>
      Updateform
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateform;
