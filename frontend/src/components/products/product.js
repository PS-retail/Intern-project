import React from "react";
import "./product.css"

const Product = (props) => {
  return (
    <div className ="card">
        <div className="imgBx">
            <img src={props.product.image}></img>
        </div>
        <div className="contentBx">
            <h3>{props.product.name}</h3>
            <h2 className="description">{props.product.description}</h2>
            <a href={props.product.augmentedReality} target="_blank" className="buy">Try in AR</a>
        </div>
    </div>

  );
};

export default Product;
