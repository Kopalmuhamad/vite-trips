import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ title }) => {
  return (
    <>
      <div className="section-title-container">
        <h1 className="section-title">{title}</h1>
        <h1 className="shadow-section-title">{title}</h1>
      </div>
    </>
  );
};

export default SectionTitle;
