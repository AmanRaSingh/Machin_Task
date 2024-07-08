import { Component } from 'react'
import { Box } from '@mui/material'
export default class Cart extends Component {
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

                </Box>
            </>
        )
    }
}
