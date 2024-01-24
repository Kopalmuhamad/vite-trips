import React from "react";
import "./Layout.scss";

const Layout = ({ children, fluid }) => {
  return (
    <main className="layout">
      <div className={`layout-container ${fluid ? "fluid" : ""}`}>
        {children}
      </div>
    </main>
  );
};

export default Layout;
