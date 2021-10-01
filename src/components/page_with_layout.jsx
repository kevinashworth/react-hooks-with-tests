import React from "react";

import Content from "../layout/content";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";

const PageWithLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
};

export default PageWithLayout;
