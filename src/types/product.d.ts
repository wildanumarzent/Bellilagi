interface ProductRoot {
  id: number
  category_id: number
  name: string
  link_affiliate: string
  image: string
  address: string
  rating: number
  total_terjual: string
  no_product: string
  created_at: string
  updated_at: string
  product_image_path: string
}

interface IProduct {
  id: number;
  title: string;
  image: string;
  total_sold: string;
  no_product:string;
  link_affiliate:string;
  location: string;
  rating: number;
}

interface IProductResponse {
  data: ProductRoot[];
}

interface ProductDetailResponse {
  data: ProductRoot[];
}


