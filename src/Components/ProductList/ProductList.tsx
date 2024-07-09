import { Component } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
}

interface State {
    products: Product[] | null;
}

export default class ProductList extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            products: null
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                console.log(response.data);
                this.setState({ products: response.data.products });
            })
            .catch(error => {
                console.error("There was an error making the request:", error);
            });
    }

    handleIcon = () => {
        alert("Handle Icon clicked");
    }

    handleAddToCart = () => {
        alert("Handle Add To Cart clicked");
    }

    render() {
        const { products } = this.state;
    
        if (!products) {
            return <Typography>Loading...</Typography>;
        }
    
        return (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {products.map(product => (
                        <Box key={product.id} style={{ border: "px solid green", width: "30%", height: "10%", margin: "auto", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                            <FavoriteBorderIcon onClick={this.handleIcon} />
                            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img
                                    src={product.images[0]}
                                    style={{ height: 'auto', width: '60%' }}
                                    alt={`Product ${product.id}`}
                                />
                                <Typography>Name: {product.title}</Typography>
                                <Typography variant="h6">Price: {product.price}</Typography>
                                <Button sx={{color:"black", backgroundColor:"aqua"}} onClick={this.handleAddToCart}>ADD TO CART</Button>
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    }
}
