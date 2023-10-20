import { 
	legacy_createStore as createStore,
	combineReducers
} from 'redux';
import accountReducer from './features/accounts/AccountSlice';
import customerReduser from './features/customers/CustomerSlice';

const rootReducer = combineReducers({
	accounts: accountReducer,
	customers: customerReduser,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;