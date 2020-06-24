import React from 'react'

import product1 from './images/product1.jpg'
import product2 from './images/product2.jpg'
import product3 from './images/product3.jpg'
import product4 from './images/product4.jpg'
import product5 from './images/product5.png'
import product6 from './images/product6.jpg'
import product7 from './images/product7.jpg'
import product8 from './images/product8.jpg'
import product9 from './images/product9.jpg'
import product10 from './images/product10.jpg'
import product11 from './images/product11.jpg'
import product12 from './images/product12.jpg'



import {connect} from 'react-redux'
import {addItem} from '../actions/itemAction'



 class Products extends React.Component {
      
   
    
   
    products=[
        {imgs: product1, price: '100' , name: 'sweeter'},
        {imgs: product2, price: '120' , name: 'casual outfit'},
        {imgs: product3, price: '155' , name: 'pants' },
        {imgs: product4, price: '125' , name: 'shoes' },
        {imgs: product5, price: '160' , name: 'clothes'},
        {imgs: product6, price: '170' , name: 'summer outfit' },
        {imgs: product7, price: '130' , name: 'classic outfit'},
        {imgs: product8, price: '132' , name: 'outfit'},
        {imgs: product9, price: '190' , name: 'accesories' },
        {imgs: product10, price: '175', name: 'hat & T-SHIRT'},
        {imgs: product11, price: '154', name: 'shoes'},
        {imgs: product12, price: '180', name: 'hat'}
    ]

    onClick = (name , img , price) => {
        
       
       const newItem = {
           name: name,
           count: 1,
           image: img,
           price: price,
           code: Math.floor(Math.random()*100 + 1550)
       }

       this.props.addItem(newItem)

      
       
    }

    render(){
        
        return(
            <div>
            
                
                <h5 className= 'pt-5 pl-5 ' style={{fontWeight: '400'}} >Woman trendy fashion</h5>
                <div className='container-fluid '>
                <div className='row text-center mx-auto'>
                 {this.products.map((product , i )=> (
                     <div  key ={i++} className =' col-md-5 col-lg-3 mx-auto' >
                     <div className="card shadow my-4 mx-auto" style={{width: '18rem'}}>
          
                     <img className="card-img-top m-3 shadow rounded" src={product.imgs} alt="img"
                     style={{maxHeight: '250px', minHeight:'250px'}}/>

                     
                     <div className="card-body">
                    
                 <h5 className="card-title">{product.name}</h5>
                 <h6>{product.price}$</h6>
                    
                       <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                 
                       
                      

                       <button  className="btn btn-outline-primary mr-3" id = {product._id} onClick= {this.onClick.bind(this, product.name, product.imgs, product.price)}>Add To Card
                       <img src="https://img.icons8.com/windows/32/000000/fast-cart.png" className='pl-2'/>
                       </button>
                       
                      
           
                      
                      
                     </div>
                     </div>
                   </div>
                 ))}
                 </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(Products)