import React, { useState } from 'react'
import { useEffect } from 'react';
import { useCart } from "react-use-cart";
import Breadcrumbs from './Breadcrumbs';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
const cartPoductImg = {
    width: '50px'
}
const cartProductQty = {
    width: '100px'
}
const Cart = () => {
    const { items, addItem, updateItem, getItem, setItems, removeItem, isEmpty,updateItemQuantity,totalItems,cartTotal } = useCart();
    const [cartItems, setCartItems] = useState(items);
    const [proQty, setProQty] = useState(1);
    const [deletePro, setDeletePro] = useState(0);
    const [shippingTotal, setShippingTotal] = useState(10);


    const onChangeHandler = (event, kv, mv) => {
        const cpyCart = [...cartItems];
        let cpProduct =  cpyCart[kv];
        let newQty = event.target.value;
       
        if (newQty > mv) {
            cpProduct.quantity = mv;
        }
        updateItemQuantity(cpProduct.id, cpProduct.quantity);
        updateItem(cpProduct.id, cpProduct);
    };


    const incrementHandler = (kv, mv) => {
        const cpyCart = [...cartItems];
        let cpProduct =  cpyCart[kv];
        cpProduct.quantity = cpProduct.quantity + 1;
        if (cpProduct.quantity > mv) {
            cpProduct.quantity = mv;
        }
        updateItemQuantity(cpProduct.id, cpProduct.quantity);
        updateItem(cpyCart[kv].id, cpyCart[kv]);
    };

    const deCrementHandler = (kv, mv) => {
        const cpyCart = [...cartItems];
        let cpProduct =  cpyCart[kv];
        cpProduct.quantity = cpProduct.quantity - 1;
        if (cpProduct.quantity < 1) {
            cpProduct.quantity = 1;
        }
        updateItemQuantity(cpProduct.id, cpProduct.quantity);
        updateItem(cpProduct.id, cpProduct);
    };

    const rmFromCart = (id) => {
        removeItem(id);
        setCartItems(cartItems.filter((citems) => citems.id !== id));       
    }

    useEffect(() => {
        if(deletePro > 0){
            rmFromCart(deletePro); 
        }   
    },[deletePro])


    return (
        <>
            <Breadcrumbs params={{ 'title': 'Shopping Cart' }} />

            {
                !isEmpty ?
                    <div className="container-fluid pt-5">
                        <div className="row px-xl-5">
                            <div className="col-lg-8 table-responsive mb-5">
                                <table className="table table-bordered text-center mb-0">
                                    <thead className="bg-secondary text-dark">
                                        <tr>
                                            <th>Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="align-middle">
                                        {
                                            cartItems.map((product, key) => {

                                                return (
                                                    <tr key={key}>
                                                        <td className="align-middle al-lft">
                                                            <img src={product.product_img} alt="" style={cartPoductImg} />
                                                            {product.product_name}
                                                        </td>
                                                        <td className="align-middle">
                                                            $ {product.price}
                                                        </td>
                                                        <td className="align-middle">
                                                            <div className="input-group quantity mx-auto" style={cartProductQty}>
                                                                <div className="input-group-btn">
                                                                    <button className="btn btn-sm btn-primary btn-minus" onClick={(event) => deCrementHandler(key, product.product_max_qty)}>
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                </div>
                                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" onChange={(event) => onChangeHandler(event, key, product.product_max_qty)} value={product.quantity} min="1" />
                                                                <div className="input-group-btn">
                                                                    <button className="btn btn-sm btn-primary btn-plus" onClick={(event) => incrementHandler(key, product.product_max_qty)}>
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">$  {(product.price * product.quantity).toFixed(2)}</td>
                                                        <td className="align-middle"><button className="btn btn-sm btn-primary" onClick={() => setDeletePro(product.id)}><i className="fa fa-times"></i></button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-lg-4">
                                <form className="mb-5" action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary">Apply Coupon</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="card border-secondary mb-5">
                                    <div className="card-header bg-secondary border-0">
                                        <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-3 pt-1">
                                            <h6 className="font-weight-medium">Subtotal</h6>
                                            <h6 className="font-weight-medium">${cartTotal.toFixed(2)}</h6>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-medium">Shipping</h6>
                                            <h6 className="font-weight-medium">${shippingTotal.toFixed(2)}</h6>
                                        </div>
                                    </div>
                                    <div className="card-footer border-secondary bg-transparent">
                                        <div className="d-flex justify-content-between mt-2">
                                            <h5 className="font-weight-bold">Total</h5>
                                            <h5 className="font-weight-bold">${(cartTotal + shippingTotal).toFixed(2)}</h5>
                                        </div>
                                        <Link to='/checkout' className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</Link>

                                        {/* <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    :  <p>Cart is empty</p>
            }
        </>
    )
}

export default Cart