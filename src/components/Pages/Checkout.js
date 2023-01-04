import React from 'react'
import { useCart } from "react-use-cart";
import Breadcrumbs from './Breadcrumbs';

import { useForm } from 'react-hook-form';
import Input from '../InputHookComponents/Input';
import Select from '../InputHookComponents/Select';
import Checkbox from '../InputHookComponents/Checkbox';

const Checkout = () => {
    const { register,
        handleSubmit,
        formState: { errors },

    } = useForm({
        defaultValue: {
            firstName: ''
        }
    });
    const formSubmit = (data) => {
        console.log(data);
    }

    const { items, totalItems, cartTotal } = useCart();
    return (
        <>
            <Breadcrumbs params={{ 'title': 'Checkout' }} />

            <div className="container-fluid pt-5">
                <form onSubmit={handleSubmit(formSubmit)}>

                    <div className="row px-xl-5">
                        <div className="col-lg-8">
                            <div className="mb-4">
                                <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" name="firstName" placeholder="First Name" label="First Name" register={register} required/>
                                        {errors.firstName && <p>This field is required</p>}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" name="lastName" placeholder="Last Name" label="Last Name" register={register} required />
                                        {errors.lastName && <p>This field is required</p>}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" name="email" placeholder="Email" label="Email" register={register} required />
                                        {errors.email && <p>This field is required</p>}

                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" name="mobileNumber" placeholder="Mobile Number" label="Mobile Number" register={register} required />
                                        {errors.mobileNumber && <p>This field is required</p>}

                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" name="address1" placeholder="Address1" label="Address 1" register={register} required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" name="address2" placeholder="Address 2" label="address2" register={register} required />
                                        {errors.mobileNumber && <p>This field is required</p>}

                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Select className="custom-select" name="country" label="Country" {...register("Country")} options={["United States", "Afghanistan", "Albania", "Algeria"]} />
                                    </div>
                                    <div className="col-md-6 form-group"> 
                                        <Input type="text" className="form-control" name="city" placeholder="City" label="City" register={register} required />
                                        {errors.mobileNumber && <p>This field is required</p>}

                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" name="state" placeholder="State" label="State" register={register} required />
                                        {errors.mobileNumber && <p>This field is required</p>}

                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" name="zip" placeholder="Zip Code" label="Zip" register={register} required />
                                        {errors.mobileNumber && <p>This field is required</p>}

                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="custom-control custom-checkbox">
                                            <Checkbox className="custom-control-input"name="newaccount" label="Create an account" labelClassName="custom-control-label" register={register} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="custom-control custom-checkbox">
                                            <Checkbox className="custom-control-input" name="shipto" label="Ship to different address" labelClassName="custom-control-label" dataToggle="collapse" dataTarget="#shipping-address" register={register} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse mb-4" id="shipping-address">
                                <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
                                <div className="row">
                                    {/* <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" placeholder="First Name" label="First Name" register={register} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" placeholder="Last Name" label="Last Name" register={register} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="email" className="form-control" placeholder="Email" label="Email" register={register} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" placeholder="Mobile Number" label="Mobile Number" register={register} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" placeholder="Address1" label="Address 1" register={register} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" placeholder="Address 2" label="address2" register={register} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Select className="custom-select" label="Country" {...register("Country")} options={["United States", "Afghanistan", "Albania", "Algeria"]} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" placeholder="City" label="City" register={register} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" placeholder="State" label="State" register={register} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <Input type="text" className="form-control" placeholder="Zip Code" label="Zip" register={register} />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-secondary mb-5">
                                <div className="card-header bg-secondary border-0">
                                    <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                                </div>
                                <div className="card-body">
                                    <h5 className="font-weight-medium mb-3">Products ( {totalItems} )</h5>
                                    {
                                        items.map((product, key) => {

                                            return (
                                                <div className="d-flex justify-content-between" key={key}>
                                                    <p>{product.product_name}</p>
                                                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                                                </div>
                                            )
                                        })
                                    }


                                    <hr className="mt-0" />
                                    <div className="d-flex justify-content-between mb-3 pt-1">
                                        <h6 className="font-weight-medium">Subtotal</h6>
                                        <h6 className="font-weight-medium">${cartTotal.toFixed(2)}</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-medium">Shipping</h6>
                                        <h6 className="font-weight-medium">$10</h6>
                                    </div>
                                </div>
                                <div className="card-footer border-secondary bg-transparent">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5 className="font-weight-bold">Total</h5>
                                        <h5 className="font-weight-bold">${(cartTotal + 10).toFixed(2)}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-secondary mb-5">
                                <div className="card-header bg-secondary border-0">
                                    <h4 className="font-weight-semi-bold m-0">Payment</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                                            <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                                            <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                                            <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer border-secondary bg-transparent">
                                    <button type='submit' className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Checkout