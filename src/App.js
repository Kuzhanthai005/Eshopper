
import './App.css';
import React, { useState, useEffect, useTransition } from 'react';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';

import { Routes, Route } from 'react-router-dom';
import mockData from './json/MOCK_DATA.json';
import ProductDetail from './components/Pages/ProductDetail';
import Cart from './components/Pages/Cart';
import Checkout from './components/Pages/Checkout';
import Contact from './components/Pages/Contact';
import CounterOne from './components/Tests/CounterOne';
import CounterTwo from './components/Tests/CounterTwo';
import CounterThree from './components/Tests/CounterThree';
import DataFetchingUseReducer from './components/Tests/DataFetchingUseReducer';


export const EshooperContext = React.createContext();


function App() {

  let searchOptions = { keyWord: '', color: [], size: [], price: [] };

  const addtionalFilterColorArray = [
    {
      'id': 1,
      'color_name': "All",
      'product_count': 0
    },
    {
      'id': 2,
      'color_name': "Black",
      'product_count': 0
    },
    {
      'id': 3,
      'color_name': "Crimson",
      'product_count': 0
    },
    {
      'id': 4,
      'color_name': "Yellow",
      'product_count': 0
    },
    {
      'id': 5,
      'color_name': "Green",
      'product_count': 0
    },
    {
      'id': 6,
      'color_name': "Khaki",
      'product_count': 0
    },
    {
      'id': 7,
      'color_name': "Violet",
      'product_count': 0
    },
    {
      'id': 8,
      'color_name': "Orange",
      'product_count': 0
    }
  ];
  const addtionalFilterSizeArray = [
    {
      'id': 1,
      'size_name': "All",
      'product_count': 0
    },
    {
      'id': 2,
      'size_name': "XS",
      'product_count': 0
    },
    {
      'id': 3,
      'size_name': "S",
      'product_count': 0
    },
    {
      'id': 4,
      'size_name': "M",
      'product_count': 0
    },
    {
      'id': 5,
      'size_name': "L",
      'product_count': 0
    },
    {
      'id': 6,
      'size_name': "XL",
      'product_count': 0
    }
  ]

  const carouselItems = [
    {
      'id': 1,
      'carousel_img': "img/carousel-1.jpg",
      'carousel_name': 'Fashionable Dress',
      'carousel_offer_label': "10% Off Your First Order",
    },
    {
      'id': 2,
      'carousel_img': "img/carousel-2.jpg",
      'carousel_name': 'Reasonable Price',
      'carousel_offer_label': "10% Off Your First Order",
    }
  ]
  const data = {
    products: mockData,
    cartItems: [],
    searchOptions,
    filterColorData: addtionalFilterColorArray,
    filterSizeData: addtionalFilterSizeArray,
    carouselItems: carouselItems
  }

  const [productInfo, setProductInfo] = useState(data);



 
  return (

    <div className="App">
    
      <EshooperContext.Provider value={{ productInfo }}>
        <Header/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop  />} />
          <Route path='cart' element={<Cart  />} />

          <Route path='shop/:id' element={<ProductDetail />} />
          <Route path='checkout' element={<Checkout  />} />
          <Route path='contact' element={<Contact />} />

          <Route path="*" element={<p>Path not resolved</p>} />

        </Routes>

        <Footer />
        
      </EshooperContext.Provider>

    
    </div>
  );
}

export default App;
