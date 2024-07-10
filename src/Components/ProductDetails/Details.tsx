import React, { Component } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
interface Product {
    rating: number;
    id: number;
    title: string;
    price: number;
    stock: number
    images: string[];
    description: string;
    returnPolicy: string;
}

interface Props {
    id: string;
}

interface State {
    product: Product | null;
}

class Details extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            product: null
        };
    }

    componentDidMount() {
        const { id } = this.props;
        this.fetchData(id);
    }

    fetchData = (id: string) => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                console.log(response.data);
                this.setState({ product: response.data });
            })
            .catch(error => {
                console.error("There was an error making the request:", error);
            });
    }


    render() {
        const { product } = this.state;
        if (!product) return

        return (

            <Box sx={{ display: 'flex', justifyContent: "space-around", width: '70%', border: "px solid red" }}>
                <Box>
                    <Typography variant="h2">Product Details</Typography>
                    <img src={product.images[0]} style={{ width: '30%', height: 'auto', border: "1px solid red" }} alt={`Product ${product.id}`}
                    />
                </Box>

                <Box>
                    <Typography variant="h4">{product.title}</Typography>
                    <Typography variant="h6">Price: {product.price}</Typography>
                    <Typography variant='h6'>Rating: {product.rating}</Typography>
                    <Typography variant='h6'>Return Policy: {product.returnPolicy}</Typography>
                    <Typography variant='h6'>Stock: {product.stock}</Typography>
                    <Typography variant="body1">Description:-{product.description}</Typography>

                    <Button sx={{ backgroundColor: "aqua", color: "black" }}>ADD TO CART</Button>
                </Box>

            </Box>
        );
    }
}

const DetailsWrapper: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>Error: No ID provided</div>;
    }

    return <Details id={id} />;
};

export default DetailsWrapper;
