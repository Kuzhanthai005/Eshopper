import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from 'react-use-cart';
const ProductList = (props) => {
    const products = props.products;
    const { addItem, inCart } = useCart();
    const addToCart = (product) => {
        let checkIncart = inCart(product.id);
        if (!checkIncart) {
            addItem(product)
        }
    }

   
    return (
        <>
           
           
            {
                products.length > 0 ?
                    products.map((product, key) =>  {
                       
                         
                        let checkIncart = inCart(product.id);
                        let addClassExistsInCart = '';
                        {
                            checkIncart ? addClassExistsInCart= 'clicked': addClassExistsInCart='' 
                        }
                         
                       
                        return (
                           
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={key}>
                                <div className="card product-item border-0 mb-4">

                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                        <img className="img-fluid w-100" src={product.product_img} alt="" />
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3">{product.product_name}</h6>
                                        <div className="d-flex justify-content-center">
                                            <h6>${product.price}</h6><h6 className="text-muted ml-2"><del>{product.price}</del></h6>

                                        </div>
                                        <h6 className="text-truncate mb-3">Color: {product.product_color}</h6>
                                        <h6 className="text-truncate mb-3">Size: {product.product_size}</h6>

                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light border">
                                        <Link to={'/shop/' + product.id} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>

                                       
                                        <button className={`cart-button ${addClassExistsInCart}`} onClick={() => addToCart(product)}>
                                            <span className="add-to-cart">Add to cart</span>
                                            <span className="added">Added</span>
                                            <i className="fas fa-shopping-cart"></i>
                                            <i className="fas fa-box"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )
                        
                        }
                        
                    )

                    : ''
            }




        </>
    )
}

export default ProductList