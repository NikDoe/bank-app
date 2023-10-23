import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TAccountState } from '../../types';

const initialState: TAccountState = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
	isLoading: false
};

type DepositPayload = {
	ammount: number;
	loanPurpose: string;
}

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		deposit(state, action) {
			state.balance += action.payload;
		},
		withdraw(state, action) {
			state.balance -= action.payload;
		},
		requestLoan(state, action: PayloadAction<DepositPayload>) {
			if(state.loan > 0) return;

			state.balance += action.payload.ammount;
			state.loan = action.payload.ammount;
			state.loanPurpose = action.payload.loanPurpose; 
		},
		payLoan(state) {
			state.balance -= state.loan;
			state.loan = 0;
			state.loanPurpose = '';
		}
	}
});

export default accountSlice.reducer;
export const { deposit, withdraw, payLoan, requestLoan } = accountSlice.actions;