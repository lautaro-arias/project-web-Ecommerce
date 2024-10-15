import React from 'react'
import { DataGlobalProvider } from '../../provider/useGlobalProvider'
import { NavPathnameAdmin } from './components/componentsPathame/usePathameAdmin'
import CardShop from '@/app/components/productColection/cardShop'

export default function page() {
  return (
    <>
      <DataGlobalProvider>
        <NavPathnameAdmin />
        <CardShop />
      </DataGlobalProvider>
    </>
  )
}
