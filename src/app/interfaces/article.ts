export interface Article {
  _id?: string;
  code: string;
  name: string,
  designation: string;
  famille?: string;
  prixAchat?: number;
  prixVente?: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Pagination {
  total: number;
  page: number;
  pages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  pagination: Pagination;
  message?: string;
}