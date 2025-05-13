import { Bill } from "./bill";
import { Customer } from "./customer";

export interface Payment {
    _id?: string;
    facture : Bill;
    client: Customer;
    montant: number;
    moyen: string;
    statut: string;
    datePaiement: string;
    
}

export interface PaymentToAdd {
    facture : string;
    client: string;
    montant: number;
    moyen: string;
    status: string;
    datePaiement: string;
    
}
