interface ICategory {
  image: string;
  title: string;
}

interface CategoryResponse {
  data: ICategory[];
}

interface IMGCategory {
  image: string;
}

interface IMGCategoryResponse {
  data: IMGCategory[];
}
