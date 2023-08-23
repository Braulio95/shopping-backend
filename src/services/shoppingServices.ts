import shoppingData from './shoppingService.json'
import { Product } from '../types'

const shopping: Array<Product> = shoppingData

export const getProducts = () => shopping

export const addProduct = () => null