interface IProduct {
  id: number;
  title: string;
  price: number;
  special_price: number;
  image: string;
  stock: number;
  total_sold: number;
  discount: number;
  location: string;
  ratting: number;
}

interface product {
  title: string;
  price: string;
  discount: string;
  special_price: string;
  city: string;
  ratting: string;
  sold: number;
  image: string;
  id: string;
}

interface IProductResponse {
  data: IProduct[];
}

interface IProductDetail {
  title: string;
  image: string;
  sold?: number;
  rating: number;
  total_rating: number;
  price: number;
  special_price: number;
  discount: number;
  city: string;
  variant_color: VariantColor[];
  variant_size: VariantSize[];
  description: string;
  id: string;
}

interface ProductDetailResponse {
  data: IProductDetail;
}

interface VariantColor {
  id: number;
  title: string;
  image: string;
}

interface VariantSize {
  id: number;
  title: string;
}
