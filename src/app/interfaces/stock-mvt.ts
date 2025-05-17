import { Article } from "./article";

export interface StockMvt {
  _id: string;
  articleId?: Article;
  quantityChange: number;
  movementType: string;
  relatedDocumentModel: string;
  date: string;
}

export interface StockMvtToAdd {
  articleId: string;
  quantityChange: number;
  movementType: string;
  relatedDocumentModel: string;
  date: string;
  relatedDocumentId: string;
}
