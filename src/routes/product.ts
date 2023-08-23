import express from 'express'
import { getProducts, getProductsById, addProduct } from '../services/productServices';
import { PostProduct } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
    const products = getProducts()
    if (products) {
        res.status(200).send(products)
    } else {
        res.status(404).send('Not Found')
    }

})

router.get('/:productId', (req, res) => {
    const { productId } = req.params
    const product = getProductsById(parseInt(productId))
    if (product) {
        res.status(200).send(product); // 200 OK
    } else {
        res.status(404).send('Product not found'); // 404 Not Found
    }
})

router.post('/', (req, res) => {
    const newProduct: PostProduct = req.body
    const newShoppingItem = addProduct({ ...newProduct })
    res.status(200).send(newShoppingItem)
})

export default router