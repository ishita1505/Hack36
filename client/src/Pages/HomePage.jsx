import React from "react";
import Speakers from "../Components/Speakers/Speakers";
import Gallery from "../Components/EventGallery/Gallery";
import Aboutinfo from "../Components/AboutInfo/About";
import Sponsors from "../Components/Sponsors/Sponsors";
const HomePage = () => {
  return (
    <div className="">
      <Aboutinfo/>
      <Speakers />
      <Sponsors />
      <Gallery />
    </div>
  )
}

export default HomePage;
