import React from "react";
import Header from "./Header";
import Content from "./Content";
import BodyComponent from "./BodyComponent";
import BodyConten from "./BodyConten";
import Footer from "./Footer";
import PlayGame from "./PlayGame";


function Index() {
  return (
    <div>
      <Header />
      <Content />
      <PlayGame />
<div className="bg-sky-950 py-4 mt-5">

</div>
      <BodyComponent />
      <BodyConten />
      <Footer />
    </div>
  );
}

export default Index;
