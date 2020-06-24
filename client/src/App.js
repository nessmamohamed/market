import React from 'react';



import './App.css';

import Nav from './component/nav'
import Footer from './component/footer'
import Products from './component/products'

function App() {
   
  return (
    <div className="App">
      
        <Nav/>

       <Products/>
      
       <Footer/>
    </div>
  );
}

export default App;
