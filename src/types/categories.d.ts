interface ICategories {
  id: number
  type: string
  name: string
  icon: string
  category_icon_path: string
}

interface ICategory{
  id:number;
  title:string;
  image:string;
}

interface CategoryResponse {
  data: ICategories[];
}



