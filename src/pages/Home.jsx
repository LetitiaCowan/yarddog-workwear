import React from "react";
import { Hero } from "../components/Hero";
import { ProductCategories } from "../components/ProductCategories";
import { Features } from "../components/Feature";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCategories />
      <Features />
    </>
  );
};

export default Home;
