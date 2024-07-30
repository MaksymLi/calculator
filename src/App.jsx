import { Routes, Route } from 'react-router-dom' 
import Calculator from '/src/Pages/Calculator'
import Exchange from '/src/Pages/Exchange'
import Converter from '/src/Pages/Converter'
import Layout from '/src/Layout/Layout'

export default function App() {
  return (
    <>   
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Calculator />} />
          <Route path='/exchange' element={<Exchange />} />
          <Route path='/converter' element={<Converter />} />
        </Route>
      </Routes>
    </>
  )
}


