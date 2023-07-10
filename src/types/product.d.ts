interface IProduct {
  id: string;
  title: string;
  price: number;
  special_price: number;
  image: string;
  stock: number;
  total_sold: number;
  discount: number;
  location: string;
  rating: number;
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
  data: product[];
}

interface IProductDetail {
  id: string;
  title: string;
  image: string;
  sold?: number;
  ratting: number;
  total_ratting: number;
  price: number;
  special_price: number;
  discount: number;
  city: string;
  variant_color: VariantColor[];
  variant_size: VariantSize[];
  user_reviews: UserReview[];
  content_reviews: ContentReview[];
  description: string;
}

interface ProductDetailResponse {
  data: IProductDetail;
}

interface VariantColor {
  id?: number;
  title: string;
  image: string;
}

interface VariantSize {
  id?: number;
  title: string;
}

interface UserReview {
  rating: number;
  rating_at: string;
  avatar: string;
  name: string;
  comment: string;
  variasi: string;
}

interface ContentReview {
  photo: string;
}
