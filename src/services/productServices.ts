import productData from './productService.json'
import { Product, PostProduct } from '../types'

const shopping: Array<Product> = productData

export const getProducts = () => shopping

export const getProductsById = (id: number): Product | undefined => shopping.find(product => product.id === id)

export const addProduct = (newProduct: PostProduct) => {
    const newShoppingItem = {
        id: shopping.length + 1,
        ...newProduct
    }
    shopping.push(newShoppingItem)
    return newShoppingItem
}