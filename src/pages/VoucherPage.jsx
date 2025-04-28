import React from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import VoucherList from '../components/VoucherList'

const VoucherPage = () => {
  return (
    <Container>
      <BreadCrumb currentPageTitle={"Voucher Module"} />
      <VoucherList />
    </Container>
  )
}

export default VoucherPage