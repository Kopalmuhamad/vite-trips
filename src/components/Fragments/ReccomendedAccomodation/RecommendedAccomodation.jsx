import React from "react";
import "./RecommendedAccomodation.scss";

import SectionTItle from "../../Elements/SectionTitle/SectionTitle";
import Layout from "../../Layouts/Layout/Layout";

const RecommendedAccomodation = () => {
  return (
    <>
      <Layout>
        <SectionTItle title="Recommended" />
        <div className="recommend-container">
          <div className="recommend-images images-bali">
            <div className="recommend-text">
              <i className="uil uil-location-point"></i>
              <h3>Bali</h3>
            </div>
          </div>
          <div className="recommend-images images-bogor">
            <div className="recommend-text">
              <i className="uil uil-location-point"></i>
              <h3>Bogor</h3>
            </div>
          </div>
          <div className="recommend-images images-bromo">
            <div className="recommend-text">
              <i className="uil uil-location-point"></i>
              <h3>Bromo</h3>
            </div>
          </div>
          <div className="recommend-images images-labuan-bajo">
            <div className="recommend-text">
              <i className="uil uil-location-point"></i>
              <h3>Labuan Bajo</h3>
            </div>
          </div>
          <div className="recommend-images images-malang">
            <div className="recommend-text">
              <i className="uil uil-location-point"></i>
              <h3>Malang</h3>
            </div>
          </div>
          <div className="recommend-images images-rinjani">
            <div className="recommend-text">
              <i className="uil uil-location-point"></i>
              <h3>Rinjani</h3>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RecommendedAccomodation;
