import React from 'react'
import Container from './Container'
import me from "../assets/me1.jpg"

const Header = () => {
  return (
    <header className='mb-5'>
      <Container>
      <div className=" flex justify-between items-center mb-5">
        <div className="">
        <h1 className='font-bold text-2xl'>Voucher App</h1>
        <p className='text-stone-500'>MMS Software</p>
        </div>
        <div className="">
        <img src={me} alt="me" className='w-16 h-16 rounded-lg' />
        </div>
      </div>
      </Container>
    </header>
  )
}

export default Header