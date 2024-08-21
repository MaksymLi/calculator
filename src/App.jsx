import { Routes, Route } from 'react-router-dom' 
import Calculator from '/src/Pages/Calculator'
import Exchange from '/src/Pages/Exchange'
import Converter from '/src/Pages/Converter'
import Weight from '/src/Pages/Weight'
import Length from '/src/Pages/Length'
import Area from '/src/Pages/Area'
import Pressure from '/src/Pages/Pressure'
import Data from '/src/Pages/Data'
import Speed from '/src/Pages/Speed'
import Volume from '/src/Pages/Volume'
import NotFound from '/src/Pages/NotFound'
import Layout from '/src/Layout/Layout'

export default function App() {
  return (
    <>   
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Calculator />} />
          <Route path='/exchange' element={<Exchange />} />
          <Route path='/converter' element={<Converter />} />
          <Route path='/converter/length' element={<Length />} />
          <Route path='/converter/area' element={<Area />} />
          <Route path='/converter/volume' element={<Volume />} />
          <Route path='/converter/speed' element={<Speed />} />
          <Route path='/converter/weight' element={<Weight />} />
          <Route path='/converter/data' element={<Data />} />
          <Route path='/converter/pressure' element={<Pressure />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}


