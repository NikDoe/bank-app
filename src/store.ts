import { 
	legacy_createStore as createStore,
	combineReducers
} from 'redux';
import accountReducer from './features/accounts/AccountSlice';

const rootReducer = combineReducers({
	accounts: accountReducer
});

export const store = createStore(rootReducer);