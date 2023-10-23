import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCustomerState } from '../../types';

const initialState: TCustomerState = {
	fullName: '',
	nationalId: '',
	createdAd: ''
};

type CustomerPayload = Omit<TCustomerState, 'createdAd'>

const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		createCustomer(state, action: PayloadAction<CustomerPayload>) {
			state.createdAd = new Date().toISOString();
			state.fullName = action.payload.fullName;
			state.nationalId = action.payload.nationalId;
		},

		updateName(state, action) {
			state.fullName = action.payload;
		}
	}
});

export default customerSlice.reducer;
export const { createCustomer, updateName } = customerSlice.actions;
