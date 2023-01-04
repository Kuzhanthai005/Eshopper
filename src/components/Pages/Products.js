import React, { useContext, useState, useEffect } from 'react';

import ReactPaginate from 'react-paginate';
import { EshooperContext } from '../../App';
import { useCart } from "react-use-cart";
import ProductList from './ProductList';


const Products = (props) => {

    const { addItem, updateItem, getItem, setItems, inCart } = useCart();

    const useContextData = useContext(EshooperContext);

    const products = props.products;

    const [currentItems, setcurrentItems] = useState(products);


    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
       
        const endOffset = itemOffset + itemsPerPage;
       
        setcurrentItems(products.slice(itemOffset, endOffset));

        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    const cartButtons = document.querySelectorAll(".cart-button");

    cartButtons.forEach((button) => {
        button.addEventListener("click", cartClick);
    });
    
    function cartClick() {
        let button = this;
        button.classList.add("clicked");
    }

    return (
        <>
            <ProductList  products={currentItems}/>
        
            <div className='col-12 pb-1'>
                <nav aria-label="Page navigation">
                    <ReactPaginate breakLabel="..."
                        nextLabel="&raquo;"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={4}
                        pageCount={pageCount}
                        previousLabel="&laquo;"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination justify-content-center mb-3"
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        previousClassName='page-item'
                        previousLinkClassName='page-link'
                        nextLinkClassName='page-link'
                        nextClassName='page-item'
                        activeLinkClassName='active'
                        activeClassName='active'
                    />
                </nav>
            </div>

           
        </>
    )
}

export default Products