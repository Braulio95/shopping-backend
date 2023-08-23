export interface Product {
    id: number;
    product: string;
    quantity: number;
    purchaseDate: string;
    shoppingListId: number;
}

export interface PostProduct extends Omit<Product, 'id'> { }