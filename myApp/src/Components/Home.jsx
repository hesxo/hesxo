import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import StockDataService from "../Services/Service";
import { Link } from "react-router-dom";
const Home = () => {
  const [Stock, setStocks] = useState([]);

  //fetch data from database
  useEffect(() => {
    getStock();
  }, []);
  const getStock = async () => {
    const data = await StockDataService.getAllStocks();
    console.log(data.docs);
    setStocks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //DELETE Stock
  const deleteHandler = async (id) => {
    await StockDataService.deleteStock(id);
    getStock();
  };
  return (
    <div>
      Home
      <Navbar />
      <div className="center">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Stock.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.product} </td>
                  <td>{doc.category} </td>
                  <td>{doc.price} </td>
                  <td>
                    <button type="button" className="btn btn-light">
                      <Link to={`updateform/${doc.id}`}>Edit</Link>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
