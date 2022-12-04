import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProductToCart } from "../redux/Actions/CartAction";

function CartItem(cart) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);
  console.log(cart);
  return (
    <div>
      {products.map((product) => (
        <div cart={cart} product={product} key={product._id}>
          {product._id == cart.product ? (
            <div>
              <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div className="mr-1">
                  <img
                    className="rounded"
                    src="https://star-media.com.au/wp-content/uploads/2020/03/6CC8DBB8-1622-4418-8C2C-E8B4A7B49A90.jpeg"
                    width={70}
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column align-items-center product-details">
                  <span className="font-weight-bold">{product.label} </span>
                </div>
                <div className="d-flex flex-row align-items-center qty">
                  <h5 className="text-grey nbr mt-1 mr-1 ml-1">{cart.qte}</h5>
                </div>
                <div>
                  <h5 className="text-grey ">
                    <span className="prix">{product.priceTtc}</span> TND
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className="fa fa-trash mb-1 text-danger remove"
                    onClick={() => dispatch(deleteProductToCart(cart._id))}
                  />
                </div>
                <div className="product-line-price">
                  {" "}
                  <h5>Total</h5>
                  <span className="total">
                    {product.priceTtc * cart.qte}
                  </span>{" "}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default CartItem;
