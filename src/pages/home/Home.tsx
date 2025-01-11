import React from "react";
import Header from "../../components/header/Header";
import Product from "../../components/product/Product";
import About from "../../components/about/About";
import SeasonalFruit from "../../components/seasonalFruit/SeasonalFruit";
import CustomerReview from "../../components/customerReview/customerReview";

const Home = () => {
  return (
    <div>
      <Header />
      <Product />
      <About />
      <SeasonalFruit />
      <CustomerReview />
    </div>
  );
};

export default Home;
