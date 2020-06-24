import React from 'react'
import {Link} from 'react-router-dom'




import {connect} from 'react-redux'
import {getItems, deleteItem} from "../../actions/itemAction"

import { 
    Modal,
    ModalHeader,
    ModalBody, 
    NavLink
} from 'reactstrap'

class ShoppingCart extends React.Component {

    componentDidUpdate(){
        this.props.getItems()

        
    }

    

    
    state = {
        modal: false, 
        count : {id : '' , num: 1}
    }

   

  

    
    toggle = () => {
        
        this.setState({
            modal: !this.state.modal
        })

        

        

    }

   


    onClickMinus = (id, e)=> {
       e.preventDefault()
      
       const refff = document.getElementById(id)
       let count = Number(refff.value)
       if(count > 1){
           refff.value = count - 1
       }
        
    }

    onClickPlus = (id, e) => {
        e.preventDefault()

        const refff = document.getElementById(id)
        let count = Number(refff.value)
        refff.value = count +1
        
    }

    onClickRemove = (id) => {
        this.props.deleteItem(id)
        
    }

    render(){
        const items = this.props.items
        
        let price = 0

        if(items){
            items.map(item => {
               price += item.price
               
            })
        }
        
        return(
            <div>
                <NavLink onClick={this.toggle} className='text-primary'  href='#'>
                <img src="https://img.icons8.com/windows/32/000000/shopping-cart.png"/>
                </NavLink>

                <Modal 
                style={{minWidth: '50%'}}
                isOpen={this.state.modal}
                toggle={this.toggle}>


                   <ModalHeader style={{border: 'none'}}>
                      Shopping Cart
                       </ModalHeader>  

                       <ModalBody>

                       {items ? items.map((item ,i = 1) => (

                        <div className='container-fluid' key= {i++} >

                              
                                            <div className='row'>
         
                                               
                                             
                                               <img src={item.image} width='120' height='150' className='pb-3 '/>
         
                                               <div className='pl-4 my-auto ' style={{width: '160px'}}>
                                          <h5>{item.name}</h5>
                                          <p>#{item.code}</p>
                                               </div>
                                                      
                                                      <div className='my-auto mx-auto  '>
                                                          <form>
                                                          <button className='cartbtn rounded' for={item._id} onClick={this.onClickMinus.bind(this, item._id)}>-</button>
                                                            <input  className='cartinput text-center rounded '   id={item._id}  defaultValue={1}
                                                             onChange ={this.onChange}/> 
                                                            <button  className='cartbtn rounded' for={item._id} onClick={this.onClickPlus.bind(this, item._id)}>+</button>
                                                          </form>
                                                            
                                                      </div>

                                                      
         
                                               
                                          <h5 className = ' ml-3 my-auto '>{item.price}$</h5>
                                          
                                                   <button className = 'my-auto ml-5 mr-2 delete cartbtn rounded' 
                                                    onClick = {this.onClickRemove.bind(this, item._id)} >X</button>
              
                                            </div>
                                         </div>) ) : ''

                                          }
                          
                                



                                  <div className='d-flex mt-4'>

                                <Link  onClick={this.toggle} className='pt-3'>
                                <img src="https://img.icons8.com/windows/32/000000/long-arrow-left.png" className='mr-2 ' style ={{width: '20px'}}/>
                                   continue shopping
                                   
                                </Link>
                                       

                                        <p className=" ml-auto my-auto ">subtotal: <span className='price'>{price}$</span></p>
                                </div>

                                
                                
                            
                           </ModalBody>  
              </Modal>
            </div>
        )
    }
}





const mapStateToProps = (state) => ({
    items: state.items
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingCart)