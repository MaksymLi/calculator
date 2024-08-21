import { NavLink, Outlet } from "react-router-dom"
import '/src/Layout/Layout.css'

export default function Layout(){
  return(
    <>
      <main>
        <header>
          <NavLink to="/calculator">Calculator</NavLink>
          <NavLink to="/calculator/exchange">Exchange Rate</NavLink>
          <NavLink to="/calculator/converter">Unit Converter</NavLink>
        </header> 
        <Outlet />
      </main>
    </>
  )
}