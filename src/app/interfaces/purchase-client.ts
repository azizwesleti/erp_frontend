import { Article } from "./article";
import { Customer } from "./customer";

export interface PurchaseClient {
    _id: string;
  clientId: Customer;
  products:{ productId?: Article ; quantity: number; price: number, total: number }[];
  totalAmount: number;
  status: 'en attente' | 'payée' | 'annulée';
  date: string;
}

export interface PurchaseClientToAdd {
  clientId?: string;
  products:{ productId: string ; quantity: number; price: number }[];
  status: 'en attente' | 'payée' | 'annulée';
  date?: string;
}
