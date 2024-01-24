import React from "react";
import "./Product.scss";

import { product } from "../../../libs/product";

import Layout from "../../Layouts/Layout/Layout";

import SectionTitle from "../../Elements/SectionTitle/SectionTitle";
import Card from "../../Elements/Card/Card";

const Product = () => {
  return (
    <Layout>
      <SectionTitle title={"Our Trips"} />
      <div className="product-container" id="product">
        <div className="card-container">
          <Card data={product} />
        </div>
      </div>
    </Layout>
  );
};

export default Product;
