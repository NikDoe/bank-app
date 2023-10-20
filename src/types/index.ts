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