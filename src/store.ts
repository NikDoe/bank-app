import { 
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	AnyAction
} from 'redux';
import accountReducer from './features/accounts/AccountSlice';
import customerReduser from './features/customers/CustomerSlice';
import thunk, { ThunkDispatch } from 'redux-thunk';

const rootReducer = combineReducers({
	accounts: accountReducer,
	customers: customerReduser,
});

export const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;