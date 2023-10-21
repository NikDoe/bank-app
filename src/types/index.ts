//STORE, THUNKS & DISPATCH
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export type TAccountState = {
    balance: number;
    loan: number;
    loanPurpose: string;
}

export type TCustomerState = {
    fullName: string;
    nationalID: string;
}

export type RootState = {
    accounts: TAccountState;
    customers: TCustomerState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

//ACCOUNTS TYPES
export enum CurrencyValue {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
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