export type TState = {
    balance: number;
    loan: number;
    isOpen: boolean;
}

export enum ActionType {
    OPENACCOUNT = 'openAccount',
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
    REQUESTLOAN = 'requestLoan',
    PAYLOAN = 'payLoan',
    CLOSEACCOUNT = 'closeAccount',
}

export type TAction = 
{ type: ActionType.OPENACCOUNT; payload: number; } |
{ type: ActionType.DEPOSIT; payload: number; } |
{ type: ActionType.WITHDRAW; payload: number; } |
{ type: ActionType.REQUESTLOAN; payload: number; } |
{ type: ActionType.PAYLOAN; } |
{ type: ActionType.CLOSEACCOUNT;  }