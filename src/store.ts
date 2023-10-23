import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/accounts/AccountSlice';
import customerReducer from './features/customers/CustomerSlice';

export const store = configureStore({
	reducer: {
		accounts: accountReducer,
		customers: customerReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;