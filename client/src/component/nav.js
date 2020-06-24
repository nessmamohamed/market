import React from 'react'
import {Link} from 'react-router-dom' 


import ShoppingCart from './forms/ShoppingCart'

 class Nav extends React.Component{

    state = {
        menu: false,
        
    }

    toggleMenu = ()=>{
        this.setState({ menu: !this.state.menu })
    }

     render(){
        const show = (this.state.menu) ? "show" : "" ;
        
        
    return(
        <div>
          <nav className='navbar navbar-light bg-light  navbar-expand-lg px-5'   >
          
          <a className="navbar-brand " href="/" >Market</a>
          
          <button className="navbar-toggler"  type="button" onClick={ this.toggleMenu }>
         <span className="navbar-toggler-icon" ></span>
       </button>
       <div className={"collapse navbar-collapse " + show} id="navbarNav">
       <ul className="navbar-nav pt-2">
        <li className="nav-item active ml-3">
        <ShoppingCart/>
      </li>
      
      
    </ul>
  </div>
  </nav>
        </div>
    )}
} 

export default Nav