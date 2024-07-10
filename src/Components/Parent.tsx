import React, { Component } from 'react'
import { Box, Button } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList/ProductList';
import DetailsWrapper from './ProductDetails/Details';
import Cart from './Add to Cart/Cart';
import Favorite from './Favorite/Favorite';
import Header from './Header/Header';


export default class Parent extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Box sx={{ height: "4rem", border: "1px solid red", display: "flex", justifyContent: "space-between" }}>
                        <h2>ECOMMERCE</h2>
                        <Box sx={{ display: "flex", gap: "2rem" }}>
                            <Link to="/"><Button sx={{ backgroundColor: "pink", color: "black" }}>Login</Button></Link>
                            <Link to="/add-to-cart"><Button sx={{ backgroundColor: "pink", color: "black" }}>Add to Cart</Button></Link>
                            <Link to="/favorite"><Button sx={{ backgroundColor: "pink", color: "black" }}>Favorite</Button></Link>
                        </Box>
                    </Box>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/products/:id" element={<DetailsWrapper />} />
                        <Route path="/add-to-cart" element={<Cart />} />
                        <Route path="/favorite" element={<Favorite />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
