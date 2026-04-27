import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import ContactDetails from './pages/ContactDetails'
import ReturnHome from './components/ReturnHome'
import Back from './components/Back'

const App = () => {
  return (
    <>
      <Header />
      <div className='flex '>
        <ReturnHome />
        <Back />
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/contact/:id' element={<ContactDetails />}></Route>

        <Route path='/product' element={<Product />}>
          {/* Example 1, Correct way of internal routing 
          we are moving internally of product here
          navigation holds
         */}
          <Route path='kids' element={<Kids />} />
        </Route>
        {/* Example 2, we are creating internal routing but without following correct syntax and way 
          This is wrong because, we are actually not moving in a page but navigation to another page
          no internal movement
          the navbar disapperars this way
        */}
        <Route path='/product/men' element={<Men />}></Route>
        <Route path='/product/women' element={<Women />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App