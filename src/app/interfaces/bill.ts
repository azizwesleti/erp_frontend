export interface BillCustomer {
  _id: string;
  numero: string;
  client: string | any; // Can be ObjectId or populated client object
  type: 'invoice' | 'quote';
  lignes: { article: string | any; quantite: number; prixUnitaire: number }[];
  totalHT: number;
  tvaRate: number;
  totalTTC: number;
  dateFacturation: string;
  status: 'en attente' | 'payée' | 'annulée';
  purchaseOrderId?: string;
}

export interface Bill {
  _id: string;
  numero: string;
  fournisseur: string | any; // Can be ObjectId or populated client object
  type: 'invoice' | 'quote';
  lignes: { article: string | any; quantite: number; prixUnitaire: number }[];
  totalHT: number;
  tvaRate: number;
  totalTTC: number;
  dateFacturation: string;
  status: 'en attente' | 'payée' | 'annulée';
  purchaseOrderId?: string;
}

export interface BillToAdd {
  fournisseur: string;
  type: 'invoice' | 'quote';
  lignes: { article: string; quantite: number; prixUnitaire: number }[];
  tvaRate?: number;
  numero: number;
  purchaseOrderId?: string;
}

export interface BillCustomerToAdd {
  client: string;
  type: 'invoice' | 'quote';
  lignes: { article: string; quantite: number; prixUnitaire: number }[];
  tvaRate?: number;
  numero: number;
  purchaseOrderId?: string;
}
