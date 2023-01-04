import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { EshooperContext } from '../../App';
import Breadcrumbs from './Breadcrumbs';

const ProductDetail = (props) => {
    
    const { id } = useParams();
    const useContextData = useContext(EshooperContext);
    const products = useContextData.productInfo.products;
    const [singleProduct, setSingleProduct] = useState('');

    const [qty, setQty] = useState(1);
    useEffect(() => {
        let arrayKey = id - 1;
        setSingleProduct(products[arrayKey])
    }, [id])

    let {product_name,product_description,price,product_img,product_max_qty} = singleProduct;

  

    const onChangeHandler = (event, maxQtyVal) => {
        let changedQty = event.target.value;
        if (changedQty > maxQtyVal) {
            changedQty = maxQtyVal;
        }
        setQty(changedQty);
    };

    const incrementOrDecrementHandler = (operator, mqty) => {
        let newQty = qty;
        if (operator === "+") {
            newQty++;
            if (newQty > mqty) {
                newQty = mqty;
            }
        } else if (operator === "-") {
            newQty--;
            if (newQty < 1) {
                newQty = 1;
            }
        }
        setQty(newQty);

    };

    return (
        <>
            <Breadcrumbs params={{ 'title': 'Product Detail' }} />
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border">
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src={product_img} alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src={product_img} alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src={product_img} alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src={product_img} alt="Image" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </button>
                            <button className="carousel-control-next" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold">{product_name}</h3>
                        <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star-half-alt"></small>
                                <small className="far fa-star"></small>
                            </div>
                            <small className="pt-1">(50 Reviews)</small>
                        </div>
                        <h3 className="font-weight-semi-bold mb-4">${price}</h3>
                        <p className="mb-4">{product_description}</p>
                        <div className="d-flex mb-3">
                            <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                    <label className="custom-control-label" htmlFor="size-1">XS</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                    <label className="custom-control-label" htmlFor="size-2">S</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                    <label className="custom-control-label" htmlFor="size-3">M</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                    <label className="custom-control-label" htmlFor="size-4">L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                    <label className="custom-control-label" htmlFor="size-5">XL</label>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex mb-4">
                            <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                    <label className="custom-control-label" htmlFor="color-1">Black</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                    <label className="custom-control-label" htmlFor="color-2">White</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                    <label className="custom-control-label" htmlFor="color-3">Red</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                    <label className="custom-control-label" htmlFor="color-4">Blue</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                    <label className="custom-control-label" htmlFor="color-5">Green</label>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3 detail-quantity-dv">
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" onClick={(e) => incrementOrDecrementHandler('-', product_max_qty)}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" value={qty} min="1" max={product_max_qty} onChange={event => onChangeHandler(event, product_max_qty)} />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus" onClick={(e) => incrementOrDecrementHandler('+', product_max_qty)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                        </div>
                        <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
                                <button className="text-dark px-2">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button className="text-dark px-2">
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button className="text-dark px-2">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                                <button className="text-dark px-2">
                                    <i className="fab fa-pinterest"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                            <button className="nav-item nav-link active" data-toggle="tab">Description</button>
                            <button className="nav-item nav-link" data-toggle="tab">Information</button>
                            <button className="nav-item nav-link" data-toggle="tab">Reviews (0)</button>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-pane-1">
                                <h4 className="mb-3">Product Description</h4>
                                <p>{product_description}</p>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-2">
                                <h4 className="mb-3">Additional Information</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                        <div className="media mb-4">
                                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" />
                                            <div className="media-body">
                                                <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                <div className="text-primary mb-2">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="mb-4">Leave a review</h4>
                                        <small>Your email address will not be published. Required fields are marked *</small>
                                        <div className="d-flex my-3">
                                            <p className="mb-0 mr-2">Your Rating * :</p>
                                            <div className="text-primary">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="message">Your Review *</label>
                                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Your Name *</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Your Email *</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group mb-0">
                                                <input type="submit" className="btn btn-primary px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">You May Also Like</span></h2>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel related-carousel">
                            <div className="card product-item border-0">
                                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</button>
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</button>
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</button>
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</button>
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</button>
                                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetail