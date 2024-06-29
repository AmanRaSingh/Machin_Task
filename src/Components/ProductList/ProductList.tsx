import { Component } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    img: string;
    title: string;
    images: string;
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
        // const id = 1;
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
        alert("Handle Icon clicked")
    }
    handleAddToCart = () => {
        alert("Handle Add To Cart clicked")
    }
    render() {
        const { products } = this.state;
        return (
            <>
                <Link to={"/products/:id"}>

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        {products && (
                            <Box style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                {products.map(product => (

                                    <Box key={product.id} style={{ border: "4px solid green", width: "30%", height: "10%", margin: "auto" }}>
                                        <FavoriteBorderIcon onClick={this.handleIcon} />
                                        <img
                                            src={product.images[0]}
                                            style={{ height: 'auto', width: '70%', }}
                                            alt={`Product ${product.id}`}
                                        />
                                        <Typography>Name:-{product.title}</Typography>
                                        {/* <Typography>Price:-{product.price}</Typography> */}
                                        {/* <Typography>Description:-{product.description}</Typography> */}
                                        <Button sx={{ border: "1px solid red" }} onClick={this.handleAddToCart}>ADD TO CART</Button>

                                    </Box>

                                ))}

                            </Box>

                        )}
                    </Box>
                </Link>

            </>

        )
    }
}
