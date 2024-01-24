import React from "react";
import "./Home.scss";
import Hero from "../../components/Fragments/Hero/Hero";
import Product from "../../components/Fragments/Product/Product";
import RecommendedAccomodation from "../../components/Fragments/ReccomendedAccomodation/RecommendedAccomodation";

const Home = () => {
  return (
    <>
      <main className="home" id="home">
        <Hero />
        <Product />
        <RecommendedAccomodation />
      </main>
    </>
  );
};

export default Home;
