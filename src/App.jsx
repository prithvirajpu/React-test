import { Route, Routes } from 'react-router-dom'
import SecondPage from './SecondPage'
import FirstPage from './First_page'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FIfthPage from './FifthPage'
import SixthPage from './SixthPage'
import End from './EndPage'


const App = () => {
  return (
    <Routes>

      <Route path='/' element={<FirstPage/>} />
      <Route path='/second' element={<SecondPage/>} />
      <Route path='/third' element={<ThirdPage/>} />
      <Route path='/fourth' element={<FourthPage/>} />
      <Route path='/fifth' element={<FIfthPage/>} />
      <Route path='/six' element={<SixthPage/>} />
      <Route path='/end' element={<End/>} />

    </Routes>

  )
}

export default App
