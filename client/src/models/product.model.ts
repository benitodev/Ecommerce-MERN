export type Size =
  | 'XS'
  | 'S'
  | 'M'
  | 'L'
  | 'XL'
  | 'XXL'
  | 36
  | 37
  | 38
  | 39
  | 40;

export type Price = 'lower' | 'higher';

export type CategoryTypes =
  | 'clothes'
  | 'dress'
  | 'shoes'
  | 'bags'
  | 'accessories';

export interface Product {
  title: string;
  description: string;
  url: string;
  stock: number;
  category: Array<CategoryTypes>;
  price: number;
  size: Array<Size>;
  id: string;
}

export interface ProductAndQuantity extends Product {
  quantity: number;
}

export type ProductForCartRequest = Omit<Product, 'size' | 'stock'>;

export interface ProductResponse {
  product: Product;
}

export interface GetProductsResponse {
  products: Array<Product>;
}

export interface GetProductsRequest {
  category: CategoryTypes;
  size: Size;
  price: Price;
}
