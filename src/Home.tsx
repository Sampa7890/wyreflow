import React from "react";
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Innovation from "./components//Innovation";
import Industry from "./components/Industry";
import Workflow from "./components/Workflow";
import ServicesSection from "./components/Services";
import Explore from "./components/Explore";
import SocialSection from "./components/Social";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    {/*Navbar */}
    <Navbar/>
      {/*Hero Section */}
      <Hero />

      {/* 4 Cards Section */}
      <Card />

      {/*Innovation Section */}
      <Innovation />

      {/*Industry Section */}
      <Industry />

      {/*Workflow section */}
      <Workflow />

      {/*ServicesSection */}
      <ServicesSection />

      {/*Explore*/}
      <Explore />

      {/*Social Section */}
      <SocialSection />

      {/*Footer Section*/}
      <Footer />
    </>
  );
};

export default Home;
