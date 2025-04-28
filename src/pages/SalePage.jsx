import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import VoucherInfo from '../components/VoucherInfo'

const SalePage = () => {
  return (
    <Container>
      <BreadCrumb currentPageTitle={"Sale Module"} />
      <VoucherInfo />
    </Container>
  )
}

export default SalePage