import React from 'react'
import Navbar from './navs/nav'
import Banner from './home/banner'
import CardShop from './productColection/cardShop'
import Footer from './home/footer'
import { DataGlobalProvider } from '../provider/useGlobalProvider'

export default function ComponentMain() {
  return (
    <div className='bg-white dark:bg-white'>
    <DataGlobalProvider>
    <Navbar />
    <Banner />
    <CardShop/>
    <Footer/>
    </DataGlobalProvider>
    </div>
  )
}
