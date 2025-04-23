import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <div>
      <Container>
        <BreadCrumb currentPageTitle={"Product Module"} />
        
        <ProductList />
      </Container>
    </div>
  );
};

export default ProductPage;
