import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <img src="Show.gif" width={1100} />
      <hr />
      <body class= "navbar-light bg-success">
      <h5><b>Adress:</b>90 Tesa Rd.,Mueang,Nakhon Pathom 73000</h5>
      <h5><b>Tel:</b>034-252790</h5>
      <h5><b>E-mail:</b>admin@trainingconter.com</h5>
        <nav class="navbar navbar-expand-lg navbar-dark bg-light mt-lg-2">
          &copy; Copyright 2023 : NAKHON PATHOM VOCATIONAL COLLEGE
        </nav>
      </body>
    </MainLayout>
  );
};

export default Home;
