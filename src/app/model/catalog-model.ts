export interface Subcategory {
  name: string;
  image?: string;
}
export interface Category extends Subcategory {
  subcategories?: Subcategory[];
}
export interface Branch {
  branch_id: string;
  name: string;
  categories: Category[];
}
export interface Location {
  dealers_id: string;
  opco: string;
  name: string;
  branches: Branch[];
}
export interface Data {
  locations: Location[];
}
export interface CatalogResponse {
  status: string;
  data: Data;
  error: {};
}
