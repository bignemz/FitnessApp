
import React from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Layoutpage from './pages/Layoutpage/Layoutpage';
import Homepage from './pages/Homepage/Homepage';
import Pricepage from './pages/Pricepage/Pricepage';
import Joinpage from './pages/Joinpage/Joinpage';
import Image from './components/ImageContact/Image';
import './server'
import Contact from './components/ContactUs/Contact';
function App() {
  return (

    

    <BrowserRouter>
    <Routes>
          <Route path='/' element={<Layoutpage/>}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='Pricepage' element={<Pricepage/>}/>
            <Route path='Joinpage' element={<Joinpage/>}/>
                

            
          </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
