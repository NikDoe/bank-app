import { 
	AccountActionType, 
	TAccountActions, 
	TAccountDepositAction, 
	TAccountPayLoanAction, 
	TAccountRequestLoanAction, 
	TAccountState, 
	TAccountWithdrawAction 
} from '../../types';

const initialAccountState: TAccountState = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
};

export default function reducer (
	state = initialAccountState,
	action: TAccountActions,
): TAccountState {
	switch (action.type) {
		case AccountActionType.DEPOSIT:
			return {
				...state,
				balance: state.balance + action.payload
			};

		case AccountActionType.WITHDRAW:
			if(state.balance <= 0) return state;
			return {
				...state,
				balance: state.balance - action.payload
			};
		case AccountActionType.REQUEST_LOAN:
			if(state.loan > 0) return state;
			return {
				...state,
				balance: state.balance + action.payload.ammount,
				loan: action.payload.ammount,
				loanPurpose: action.payload.loanPurpose
			};

		case AccountActionType.PAY_LOAN:
			return {
				...state,
				balance: state.balance - state.loan,
				loan: 0,
				loanPurpose: ''
			};
    
		default:
			return state;
	}
}

export function deposit (depositValue: number): TAccountDepositAction {
	return { type: AccountActionType.DEPOSIT, payload: depositValue };
}

export function withdraw (withdrawValue: number): TAccountWithdrawAction {
	return { type: AccountActionType.WITHDRAW, payload: withdrawValue };
}

export function requestLoan (
	ammount: number, 
	loanPurpose: string
): TAccountRequestLoanAction {
	return { 
		type: AccountActionType.REQUEST_LOAN, 
		payload: {
			ammount,
			loanPurpose
		} 
	};
}

export function payLoan (): TAccountPayLoanAction {
	return { type: AccountActionType.PAY_LOAN };
}