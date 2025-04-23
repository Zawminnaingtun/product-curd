import React from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import ProductEditCard from '../components/ProductEditCard'

const ProductEditPage = () => {
  return (
    <Container>
          <BreadCrumb currentPageTitle={"Edit Product"} links={[{path:"/product",title:"Product Module"}]} />
          <ProductEditCard />
    </Container>
  )
}

export default ProductEditPage