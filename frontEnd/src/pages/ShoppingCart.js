import React from 'react'
import NavBar from '../components/NavBar'
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductToCart, getCart } from '../redux/Actions/CartAction';
import CartItem from '../components/CartItem';
function ShoppingCart() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getCart())
  }, [])
  const products=useSelector(state=>state.productReducer.products)
  const carts=useSelector(state=>state.cartReducer.carts)

  return (
    <div>
    <NavBar/>
    <div>
 
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="p-2">
            <h4>Shopping cart</h4>
            <div className="d-flex flex-row align-items-center pull-right"><span className="mr-1">Sort by:</span><span className="mr-1 font-weight-bold">Price</span><i className="fa fa-angle-down" /></div>
          </div>
          {carts.map(cart =><div cart={cart} key={cart._id}>{products.map(product=><div cart={cart} product={product} key={product._id}>{product._id==cart.product? <div>
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
            <div className="mr-1"><img className="rounded" src="https://star-media.com.au/wp-content/uploads/2020/03/6CC8DBB8-1622-4418-8C2C-E8B4A7B49A90.jpeg" width={70} alt=""/></div>
            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{product.label} </span>
            </div>
            <div className="d-flex flex-row align-items-center qty">
              <h5 className="text-grey nbr mt-1 mr-1 ml-1">{cart.qte}</h5>
            </div>
            <div>
              <h5 className="text-grey "><span className="prix">{product.priceTtc}</span> TND</h5>
            </div>
            <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger remove" onClick={() => dispatch(deleteProductToCart(cart._id))}/></div><div className="product-line-price"> <h5>Total</h5><span className="total">{product.priceTtc *cart.qte}</span> </div>
          </div> 
            </div>:null}</div>)}</div>)}
          <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><label>Subtotal</label><input type="text" className="form-control border-0 gift-card" /> <h4 className="totals">{carts.map(cart =><div cart={cart} key={cart._id}> </div>)}</h4></div>
          <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
        </div>
      </div>
    </div> 
</div>
</div>

  )
}

export default ShoppingCart

/*<div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
          <div className="mr-1"><img className="rounded" src="https://star-media.com.au/wp-content/uploads/2020/03/6CC8DBB8-1622-4418-8C2C-E8B4A7B49A90.jpeg" width={70} alt=""/></div>
          <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{el.label} </span>
          </div>
          <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" />
            <h5 className="text-grey nbr mt-1 mr-1 ml-1">0</h5><i className="fa fa-plus text-success" />
          </div>
          <div>
            <h5 className="text-grey "><span className="prix">{el.priceTtc}</span> TND</h5>
          </div>
          <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger remove" /></div><div className="product-line-price"> <h5>Total</h5><span className="total">0</span> </div>
        </div> */