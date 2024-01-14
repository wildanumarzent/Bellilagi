interface IBanners {
  id: number
  name: string
  image: string
  link: string
  is_active: number
  banner_image_path: string

}

interface BannerResponse {
  data: IBanners[];
}
