import React from "react";
import { Carousel, Footer, Header, Products, ResponsiveNavbar, Services } from "./components";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Header />
      {isSmallScreen && <ResponsiveNavbar />}
      <Carousel />
      <Services />
      <Products />
      <Footer />
    </>
  );
};

export default App;
