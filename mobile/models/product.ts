type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  isFavorite?: boolean;
}

export default Product;