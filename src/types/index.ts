//STORE
export type TAccountState = {
    balance: number;
    loan: number;
    loanPurpose: string;
    isLoading: boolean;
}

export type TCustomerState = {
    fullName: string;
    nationalId: string;
    createdAd: string;
}

//ACCOUNTS TYPES
export enum CurrencyValue {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
}

//CUSTOMERS TYPES
export enum CustomerActionType {
    CREATE = 'customer/createCustomer',
    UPDATE = 'customer/updateCustomer',
}

export type TCreateCustomerAction = { 
    type: CustomerActionType.CREATE; 
    payload: TCustomerState; 
}

export type TUpdateCustomerAction = { 
    type: CustomerActionType.UPDATE; 
    payload: string; 
}

export type TCustomerActions = TCreateCustomerAction | TUpdateCustomerAction