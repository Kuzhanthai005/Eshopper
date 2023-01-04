import React, { useContext, useState, useEffect, useTransition } from 'react';
import { EshooperContext } from '../../App';
import Breadcrumbs from './Breadcrumbs';
import KeywordSortFilter from './KeywordSortFilter';
import ProductFilter from './ProductFilter';
import Products from './Products';

const Shop = (props) => {

    
    
    const useContextData = useContext(EshooperContext);
    const products = useContextData.productInfo.products;
    const filterColorData = useContextData.productInfo.filterColorData;
    const filterSizeData = useContextData.productInfo.filterSizeData;

    const [colorData, setpColorData] = useState(filterColorData);
    const [sizeData, setpSizeData] = useState(filterSizeData);

    const [isPending, startTransition] = useTransition();
    const [cpProducts, setCpProducts] = useState(products);
    const [pProducts, setpProducts] = useState([]);



    let searchOptions = useContextData.productInfo.searchOptions;
    const [searchPram, setSearchParam] = useState(searchOptions);

    const addOrRemove = (arrayKey, value) => {
        const newSearchPram = { ...searchPram };
        const index = newSearchPram[arrayKey].indexOf(value);

        if (index === -1) {
            newSearchPram[arrayKey].push(value);
        } else {
            newSearchPram[arrayKey].splice(index, 1);
        }
        setSearchParam(newSearchPram);
    }

    const keyWordSearch = (event) => {
        const newSearchPram = { ...searchPram };

        newSearchPram.keyWord = event.target.value;
        setSearchParam(newSearchPram);
    }

    const orderBy = val => {
        const copyArray = [...pProducts];

        var orderByvAL = val;
        switch (orderByvAL) {
            case '1':
                copyArray.sort((a, b) => {
                    return a.id - b.id;
                });
                break;

            case '2':
                copyArray.sort((a, b) => {
                    return b.id - a.id;
                });
                break;

            case '3':
                copyArray.sort((a, b) => {
                    return a.price - b.price;
                });
                break;

            case '4':
                copyArray.sort((a, b) => {
                    return b.price - a.price;
                });
                break;

            default:
                copyArray.sort((a, b) => {
                    return a.id - b.id;
                });
        }
        setpProducts(copyArray);

    }
   
    const filterSelectedCategoryOptions = (array) => {
        let arrayVal = array;
        if (searchPram.color.length > 0 && searchPram.color.indexOf("All") === -1) {
            arrayVal = arrayVal.filter((item) => searchPram.color.includes(item.product_color));


        }
        if (searchPram.size.length > 0 && searchPram.size.indexOf("All") === -1) {
            arrayVal = arrayVal.filter((item) => searchPram.size.includes(item.product_size));
        }

        return arrayVal;
    };
    const filtersearchName = (array) => {
        let arrayVal = array;
        if (searchPram.keyWord !== '') {
            arrayVal = arrayVal.filter((item) => item.product_name.toLowerCase().indexOf(searchPram.keyWord.toLowerCase()) !== -1);
        }
        return arrayVal;
    };

    useEffect(() => {
        
        let result = [...cpProducts];
        result = filtersearchName(result);
        result = filterSelectedCategoryOptions(result);

        setpProducts(result);
    }, [searchPram]);

    useEffect(() => {
        const allColorData = [...colorData]
        if (colorData.length > 0) {
            colorData.map((color, key) => {
                let countTypes = products;
                if (color.color_name !== "All") {

                    countTypes = products.filter(produt => produt.product_color === color.color_name);
                }
                allColorData[key].product_count = countTypes.length;
            })

            setpColorData(allColorData);

        }
        const allSizeData = [...sizeData]

        if (sizeData.length > 0) {
            sizeData.map((size, key) => {
                let countTypes = products;
                if (size.size_name !== "All") {

                    countTypes = products.filter(produt => produt.product_size === size.size_name);
                }
                allSizeData[key].product_count = countTypes.length;
            })

            setpSizeData(allSizeData);
        }
    }, []);


   
    return (
        <>

            <Breadcrumbs params={{ 'title': 'Our Shop' }} />


            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-12">
                        <ProductFilter addOrRemove={addOrRemove} colorData={colorData} sizeData={sizeData} />
                    </div>


                    <div className="col-lg-9 col-md-12">
                        <div className="row pb-3">

                            <KeywordSortFilter filterOptions={{ keyWordSearch, orderBy }} />

                            <Products products={pProducts} />
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Shop


