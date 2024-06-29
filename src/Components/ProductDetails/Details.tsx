// import { Component } from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import axios from 'axios';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// interface Product {
//     id: number;
//     img: string;
//     title: string;
//     price: number;
//     images: string;
//     description: string;
// }

// interface State {
//     imageIndex: number;
//     products: Product[] | null;
// }

// export default class Details extends Component<{}, State> {
//     constructor(props: {id:string}) {
//         super(props);
//         this.state = {
//             imageIndex: 0,
//             products: null
//         };
//     }

//     componentDidMount() {
//         const {id}=this.props
//         this.fetchData(id);
//     }

//     fetchData = (id:string) => {
//         axios.get(`https://dummyjson.com/products${id}`)
//             .then(response => {
//                 console.log(response.data);
//                 this.setState({ products: response.data.products });
//             })
//             .catch(error => {
//                 console.error("There was an error making the request:", error);
//             });
//     }
//     handleIcon = () => {

//     }
//     handleAddToCart = () => {
//         alert("Handle Add To Cart clicked")
//     }
//     render() {
//         const { products } = this.state;
//         return (
//             <Box>
                

//                     <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                         {products && (
//                             <Box style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//                                 {products.map(product => (

//                                     <Box key={product.id} style={{ border: "4px solid green", width: "30%", height: "10%", margin: "auto" }}>
//                                         <FavoriteBorderIcon onClick={this.handleIcon} />

//                                         <img
//                                             src={product.images[0]}
//                                             style={{ height: 'auto', width: '70%', }}
//                                             alt={`Product ${product.id}`}
//                                         />
//                                         <Typography>Name:-{product.title}</Typography>
//                                         <Typography>Price:-{product.price}</Typography>
//                                         <Typography>Description:-{product.description}</Typography>
//                                         <Button sx={{ border: "1px solid red" }} onClick={this.handleAddToCart}>ADD TO CART</Button>
//                                     </Box>
//                                 ))}
//                             </Box>
//                         )}
//                     </Box>

//             </Box>
//         );
//     }
// }


import React, { Component } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
}

interface Props {
    match: {
        params: {
            id: string;
        };
    };
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
        const { id } = this.props.match.params;
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

    handleIcon = () => {
    }

    handleAddToCart = () => {
        alert("Handle Add To Cart clicked");
    }

    render() {
        const { product } = this.state;
        if (!product) return <div>Loading...</div>;

        return (
            <Box>
                <img
                    src={product.images[0]}
                    style={{ width: '100%', height: 'auto' }}
                    alt={`Product ${product.id}`}
                />
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="h6">Price: {product.price}</Typography>
                <Typography variant="body1">{product.description}</Typography>
                <Button sx={{ border: "1px solid red" }} onClick={this.handleAddToCart}>ADD TO CART</Button>
            </Box>
        );
    }
}

export default Details;
