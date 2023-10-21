import { 
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	Store,
	Reducer
} from 'redux';
import accountReducer from './features/accounts/AccountSlice';
import customerReduser from './features/customers/CustomerSlice';
import thunk from 'redux-thunk';
import { RootState } from './types';

const rootReducer: Reducer<RootState> = combineReducers({
	accounts: accountReducer,
	customers: customerReduser,
});

export const store: Store<RootState> = createStore(
	rootReducer,
	applyMiddleware(thunk)
);