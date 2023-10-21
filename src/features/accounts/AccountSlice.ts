import { Dispatch } from 'redux';
import { 
	AccountActionType, 
	AppThunk, 
	CurrencyValue, 
	TAccountActions, 
	TAccountPayLoanAction, 
	TAccountRequestLoanAction, 
	TAccountState, 
	TAccountWithdrawAction 
} from '../../types';


const initialAccountState: TAccountState = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
	isLoading: false
};

export default function reducer (
	state = initialAccountState,
	action: TAccountActions,
): TAccountState {
	switch (action.type) {
		case AccountActionType.DEPOSIT:
			return {
				...state,
				balance: state.balance + action.payload,
				isLoading: false,
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

		case AccountActionType.CONVERT_CURRENCY:
			return {
				...state,
				isLoading: true,
			};
    
		default:
			return state;
	}
}

export function deposit (
	depositValue: number, 
	currency: string
): AppThunk {
	const queryString = `amount=${depositValue}
	&from=${currency}
	&to=${CurrencyValue.USD}`;

	return async function(dispatch: Dispatch) {
		dispatch({ type: AccountActionType.CONVERT_CURRENCY });

		if(currency === CurrencyValue.USD) {
			dispatch(
				{ 
					type: AccountActionType.DEPOSIT, 
					payload: depositValue
				}
			);
		} else {
			const response = await fetch(`https://api.frankfurter.app/latest?${queryString}`);
			const data = await response.json();
	
			dispatch(
				{ 
					type: AccountActionType.DEPOSIT, 
					payload: data.rates[CurrencyValue.USD] 
				}
			);
		}
	};
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