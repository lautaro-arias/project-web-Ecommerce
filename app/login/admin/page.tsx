import React from 'react'
import { DataGlobalProvider } from '../../provider/useGlobalProvider'
import { NavPathnameAdmin } from './components/componentsPathame/usePathameAdmin'
import ListCard from '@/app/components/productoCollection/listCard'

export default function page() {
  return (
    <>
      <DataGlobalProvider>
        <NavPathnameAdmin />
        <ListCard />
      </DataGlobalProvider>
    </>
  )
}
