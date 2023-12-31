import React from 'react'
import Navbar from '../components/Navbar'
import Artikel from '../components/Artikel'
import List from '../components/List'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Listartikel = () => {
  return (
    <div>
        <Navbar />
      <div className="mt-[43px] ml-[96px] flex">
        <ul className='flex gap-9 text-[#4E97D1] text-["Poppins"] font-bold underline text-[25px]'>
          <li className="cursor-pointer">Gaya Hidup</li>
          <li className="cursor-pointer">Kecantikan</li>
          <li className="cursor-pointer">Wisata</li>
          <li className="cursor-pointer">Kuliner</li>
        </ul>
        <div className="ml-[300px]">
          <Artikel />
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-[40px]">
        <Link to="/detail-artikel">
          <List />
        </Link>
        <List />
        <List />
      </div>
      <div className="mt-[99px]">
        <Pagination />
      </div>
      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  )
}

export default Listartikel