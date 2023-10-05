export interface Product {
    id: string;
    sku: string;
    name: string;
    type: 'pant' | 'short' | 'dress' | 'shoe' | 'shirt' | 'eyewear';
    description: string;
    color: string;
    price: number;
}