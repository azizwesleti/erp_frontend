import { Article } from "./article";
import { Supplier } from "./supplier";

export interface PurchaseOrder {
    _id: string;
  supplierId: Supplier;
  products:{ productId: Article ; quantity: number; price: number, total: number }[];
  totalAmount: number;
  status: 'en attente' | 'payée' | 'annulée';
  date: string;
}

export interface PurchaseOrderToAdd {
  supplierId?: string;
  products:{ productId: string ; quantity: number; price: number }[];
  status: 'en attente' | 'payée' | 'annulée';
  date?: string;
}
