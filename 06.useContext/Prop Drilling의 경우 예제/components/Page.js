import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ isDark, setIsDark }) => {
  return (
    <div>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;
