import React from "react";
import Navbar from "./Navbar";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react";
import { storage } from "../Services/firebase-config";

const Kitchen = () => {
  const [imageList, setimageList] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const imageListRef = ref(storage, "images/");

  //fetch image from firebase
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimageList((prev) => [...prev, url]);
        });
      });
      console.log(response);
    });
  }, []);
  return (
    <div>
      Kitchen
      <Navbar />
      {imageList.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
};

export default Kitchen;
