import React from 'react'
const ProductFilter = (props) => {
    const addOrRemove = props.addOrRemove;
    const colorData = props.colorData;
    const sizeData = props.sizeData;

    return (
        <>

            <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
                <form>
                    {
                        colorData.length > 0 ?
                            colorData.map((color, key) => {
                                return (

                                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={color.id}>
                                        <input type="checkbox" className="custom-control-input" id={color.color_name} onClick={() => addOrRemove('color', color.color_name)} />
                                        <label className="custom-control-label" htmlFor={color.color_name}>{color.color_name}</label>
                                        <span className="badge border font-weight-normal">{color.product_count}</span>
                                    </div>
                                )
                            })
                            :
                            ''
                    }
                </form>
            </div>

            <div className="mb-5">
                <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                <form>
                {
                        sizeData.length > 0 ?
                        sizeData.map((size, key) => {
                                return(
                                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={size.id}>
                                    <input type="checkbox" className="custom-control-input" id={size.size_name} onClick={() => addOrRemove('size', size.size_name)} />
                                    <label className="custom-control-label" htmlFor={size.size_name}>{size.size_name}</label>
                                    <span className="badge border font-weight-normal">{size.product_count}</span>
                                </div>
                                ) 
                            })
                            :
                            ''
                    }
                   
                  
                </form>
            </div>
        </>
    )
}

export default ProductFilter