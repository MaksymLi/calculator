import { NavLink, Outlet } from "react-router-dom"
import '/src/Layout/Layout.css'

export default function Layout(){
  return(
    <>
      <main>
        <header>
          <NavLink to="/">Calculator</NavLink>
          <NavLink to="/exchange">Exchange Rate</NavLink>
          <NavLink to="/converter">Unit Converter</NavLink>
        </header> 
        <Outlet />
      </main>
      
    </>
  )
}