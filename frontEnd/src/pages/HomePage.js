import React from 'react'
import NavBar from '../components/NavBar'
import {useSelector} from 'react-redux'
import Product from '../components/Product'
import Client from '../components/Client'
import { addProductToCart } from '../redux/Actions/CartAction';
import { useDispatch} from "react-redux";
//mui

function HomePage() {
  const dispatch=useDispatch()
  const products=useSelector(state=>state.productReducer.products)
  const clients=useSelector(state=>state.clientReducer.clients)
  
  return (
    <div>
     <NavBar/>
     <h1>Products List</h1>
     <div style={{display:"flex",justifyContent:"space-evenly"}}>
     {products.map(el=><Product el={el} key={el._id} />)}
     </div>
     <h1>Clients List</h1>
     <div style={{display:"flex",justifyContent:"space-evenly"}}>
     {clients.map(el=><Client el={el} key={el._id}  />)}
     </div>
    </div>
  )
}

export default HomePage