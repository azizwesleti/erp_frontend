export interface Bill {
  _id?: string;
  numero: string;
  client: string | any; // Can be ObjectId or populated client object
  type: 'invoice' | 'quote';
  lignes: { article: string | any; quantite: number; prixUnitaire: number }[];
  totalHT: number;
  tvaRate: number;
  totalTTC: number;
  dateFacturation: Date;
  status: 'en attente' | 'payée' | 'annulée';
  purchaseOrderId?: string;
}

export interface BillToAdd {
  client: string;
  type: 'invoice' | 'quote';
  lignes: { article: string; quantite: number; prixUnitaire: number }[];
  tvaRate?: number;
  purchaseOrderId?: string;
}