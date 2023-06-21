interface ICategory {
  image: string;
  title: string;
}

interface categoryResponse {
  data: ICategory[];
}

interface IMGCategory {
  image: string;
}

interface IMGCategoryResponse {
  data: IMGCategory[];
}
