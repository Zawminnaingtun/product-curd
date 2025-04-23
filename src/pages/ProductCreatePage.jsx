import React from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import ProductCreateCard from '../components/ProductCreateCard'

const ProductCreatePage = () => {
  return (
    <Container>
      <BreadCrumb currentPageTitle={"Create Product"} links={[{path:"/product",title:"Product Module"}]} />
      <ProductCreateCard />
    </Container>
  )
}

export default ProductCreatePage