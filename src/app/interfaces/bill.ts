export interface Bill {
    _id?: string;
    clientName : string;
  type: string;
  status: string;
    dateFacture: string;
    dateFacturation: string;
    lignes: any[] ;
    total: number;
    tvaRate: number;


}

export interface BillToAdd {
    _id?: string;
    clientName : string;
  type: string;
  status: string;
    dateFacture: string;
    dateFacturation: string;


}

