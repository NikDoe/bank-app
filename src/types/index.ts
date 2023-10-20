export type TAccountState = {
    balance: number;
    loan: number;
    loanPurpose: string;
}

export enum AccountActionType {
    DEPOSIT = 'accounts/deposit',
    WITHDRAW = 'accounts/withdraw',
    REQUEST_LOAN = 'accounts/requestLoan',
    PAY_LOAN = 'accounts/payLoan',
}

type TRequestLoanObject = {
    ammount: number,
    loanPurpose: string,
};

export type TAccountDepositAction = { 
    type: AccountActionType.DEPOSIT; 
    payload: number 
}

export type TAccountWithdrawAction = { 
    type: AccountActionType.WITHDRAW; 
    payload: number 
}

export type TAccountRequestLoanAction = { 
    type: AccountActionType.REQUEST_LOAN; 
    payload: TRequestLoanObject 
}

export type TAccountPayLoanAction = { 
    type: AccountActionType.PAY_LOAN; 
}

export type TAccountActions = 
TAccountDepositAction |
TAccountWithdrawAction |
TAccountRequestLoanAction |
TAccountPayLoanAction

//CUSTOMERS TYPES
export type TCustomerState = {
    fullName: string;
    nationalID: number;
}

export enum CustomerActionType {
    CREATE = 'customer/createCustomer',
    UPDATE = 'customer/updateCustomer',
}

type TCreateCustomerObject = {
    fullName: string;
    nationalID: number;
};

export type TCreateCustomerAction = { 
    type: CustomerActionType.CREATE; 
    payload: TCreateCustomerObject; 
}

export type TUpdateCustomerAction = { 
    type: CustomerActionType.UPDATE; 
    payload: string; 
}

export type TCustomerActions = TCreateCustomerAction | TUpdateCustomerAction