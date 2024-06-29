import { Component } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const data = [
    {
        id: 0,
        img: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f21c8c88a0bb63e0.png?q=20"
    },
    {
        id: 1,
        img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bf42fbdd3d37c8c3.jpg?q=20"
    },
    {
        id: 2,
        img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20"
    },
    {
        id: 3,
        img: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/78e89d02375d5222.jpg?q=20"
    }
];

interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    images: string;
    description:string;
}

interface State {
    imageIndex: number;
    products: Product[] | null;
}

export default class Header extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            imageIndex: 0,
            products: null
        };
    }

    componentDidMount() {
        this.setNextImage();
        // this.fetchData();
    }

    setNextImage = () => {
        setTimeout(() => {
            this.setState(prevState => ({
                imageIndex: (prevState.imageIndex + 1) % data.length
            }), this.setNextImage);
        }, 5000);
    }

    // fetchData = () => {
    //     const id=1;
    //     axios.get(`https://dummyjson.com/products${id}`)
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({ products: response.data.products });
    //         })
    //         .catch(error => {
    //             console.error("There was an error making the request:", error);
    //         });
    // }
    handleIcon = () => {

    }
    handleAddToCart = () => {
        alert("Handle Add To Cart clicked")
    }
    render() {
        const { imageIndex, products } = this.state;
        return (
            <Box>
                <img

                
                    src={data[imageIndex].img}
                    style={{ width: '100%', height: 'auto' }}
                />
                {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                                    <Typography>Price:-{product.price}</Typography>
                                    <Typography>Description:-{product.description}</Typography>
                                    <Button sx={{ border: "1px solid red" }} onClick={this.handleAddToCart}>ADD TO CART</Button>

                                </Box>

                            ))}

                        </Box>

                    )}
                </Box> */}

            </Box>
        );
    }
}

