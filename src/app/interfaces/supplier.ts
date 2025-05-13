export interface Supplier {
    _id: string;
  nom: string;
  email: string;
  téléphone: string;
  adresse: string;
  contact: string;
  historique: string;
  createdAt?:string;
  updatedAt?:string;
}

export interface SupplierToAdd {
  nom: string;
  email: string;
  téléphone: string;
  adresse: string;
  contact: string;
  historique: string;
  createdAt?:string;
  updatedAt?:string;
}