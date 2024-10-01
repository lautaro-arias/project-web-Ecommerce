import React from 'react'
import Nav from './nav'
import Bannner from './bannner'
import Card from './card'
import Footer from './footer'
import MasVendido from './masVendido'
import Info from './info'

export default function ComponentMain() {
  return (
    <>
        <Nav/>
        <Bannner/>
        <MasVendido/>
        <Card/>
        <Info />
        <Footer/>

    </>
  )
}
