import { Component } from 'react'
import { Box } from '@mui/material'
interface CartState {
    product: any;
}



export default class Cart extends Component<{}, CartState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            product: null
        }
    }
    render() {
        const { product } = this.state;
        if (!product) return

        return (
            <>
                <Box style={{}}>
                    <img src={product.images[0]} />
                    <h1>add to cart</h1>
                </Box>
            </>
        )
    }
}
