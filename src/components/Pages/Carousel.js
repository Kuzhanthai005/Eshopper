import React from 'react'

const Carousel = (props) => {
    const carouselItems = props.carouselItems;
    return (
        <>
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                {
                carouselItems.length > 0 ?
                carouselItems.map((carousel, key) =>  {
                       
                        return (
                            <>
                             <div className={`carousel-item  ${key == 0 ? 'active':''}`} key={key}>
                        <img className="img-fluid" src={carousel.carousel_img} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3">
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">{carousel.carousel_name}</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">{carousel.carousel_offer_label}</h3>
                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                            </>
                        )
                    })
                    :''
                }
                   
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-dark">
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-dark">
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Carousel