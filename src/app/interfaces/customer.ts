export interface Customer {
  _id: string;
  clientType: 'physique' | 'moral';
  firstName?: string;
  lastName?: string;
  companyName?: string;
  industry?: string;
  emailAddress: string;
  phoneNumber: string;
  postalAddress: string;
  interactionHistory: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerToAdd {
  clientType: 'physique' | 'moral';
  firstName?: string;
  lastName?: string;
  companyName?: string;
  industry?: string;
  phoneNumber: string;
  emailAddress: string;
  postalAddress: string;
  interactionHistory?: string[];
}

export interface CustomerSearchParams {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  clientType?: 'physique' | 'moral';
  page?: number;
  limit?: number;
}