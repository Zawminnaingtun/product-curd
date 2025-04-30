import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import VoucherCard from '../components/VoucherCard'

const VoucherDetailPage = () => {
  return (
    <Container>
          <BreadCrumb currentPageTitle={"Voucher Detail"} links={[{path:"/voucher",title:"Voucher Module"}]} />
          <VoucherCard />
    </Container>
  )
}

export default VoucherDetailPage