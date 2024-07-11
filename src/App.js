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
      <i style={{fontSize:'36px'}} class="ri-menu-fold-2-line"></i>
        <RiHeartFill
          size={36} // set custom `width` and `height`
          color="red" // set `fill` color
          className="my-icon" // add custom class name
          />
        <h1 className="text-3xl font-bold mb-4">My Tailwind CSS Component</h1>
        <p className="text-gray-700">
          This content is styled with Tailwind classes.
        </p>
      </div>
      </div>
          </div>
      <Footer />
    </>
  );
}

export default App;
