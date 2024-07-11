import React from "react";
import { Navbar } from "./components/Navbar";
import BannerImage from "./assets/pic-1.avif";
import { RiHeartFill } from "@remixicon/react";
import Footer from "./components/Footer";
import FeaturedProduct from "./components/FeaturedProduct";
import FeaturedProducts from "./components/FeaturedProduct";

function App() {
  // Only re-register event listener when prevScrollPos changes
  return (
    <>
      <Navbar />
      <div className="mostly-customized-scrollbar">
        <div className="p-6">
          <img
            className="h-screen w-full object-center"
            alt="banner-img"
            src={BannerImage}
          />
        </div>
        <div class="container mx-auto">
          <div className="container mx-auto px-4 py-8">
            <FeaturedProducts />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
