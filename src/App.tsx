import { useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { ActionType, TAction, TState } from "./types";

const initialState: TState = {
	balance: 0,
	loan: 0,
	isOpen: false
};

function reducer (state: TState, action: TAction): TState {
	switch (action.type) {
		case ActionType.OPENACCOUNT:
			return {
				...state,
				balance: state.balance + action.payload,
				isOpen: true
			};
		
		case ActionType.DEPOSIT:
			return {
				...state,
				balance: state.balance + action.payload
			};
		
		case ActionType.WITHDRAW:
			return {
				...state,
				balance: state.balance > 0 
					? state.balance - action.payload 
					: 0
			};
		case ActionType.REQUESTLOAN:
			if(state.loan > 0) return state;
			return {
				...state,
				balance: state.balance + action.payload,
				loan: action.payload
			};

		case ActionType.PAYLOAN:
			return {
				...state,
				balance: state.balance - state.loan,
				loan: 0
			};

		case ActionType.CLOSEACCOUNT:
			if(state.balance !== 0 || state.loan > 0) return state;
			return initialState;

		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="app">
			<Header />
			<Main 
				state={state} 
				dispatch={dispatch}
			/>
		</div>
	);
}

export default App;
