import { Dispatch } from "react";
import { ActionType, TAction, TState } from "../types";
import Button from "./Button";

type MainProps = {
    state: TState;
    dispatch: Dispatch<TAction>
}

const OPEN_ACCOUNT_DEPOSIT = 100;
const DEPOSIT_VALUE = 100;
const WITHDRAW_VALUE = 50;
const LOAN_VALUE = 2000;

function Main(props: MainProps) {
	const {
		state,
		dispatch
	} = props;

	const { balance, loan, isOpen } = state;

	function handleOpenAccount () {
		const action: TAction = {
			type: ActionType.OPENACCOUNT,
			payload: OPEN_ACCOUNT_DEPOSIT
		};

		dispatch(action);
	}

	function handleDeposit () {
		const action: TAction = {
			type: ActionType.DEPOSIT,
			payload: DEPOSIT_VALUE
		};

		dispatch(action);
	}

	function handleWithdraw () {
		const action: TAction = {
			type: ActionType.WITHDRAW,
			payload: WITHDRAW_VALUE
		};

		dispatch(action);
	}

	function handleRequestLoan () {
		const action: TAction = {
			type: ActionType.REQUESTLOAN,
			payload: LOAN_VALUE
		};

		dispatch(action);
	}

	function handlePayLoan () {
		const action: TAction = {
			type: ActionType.PAYLOAN
		};

		dispatch(action);
	}
    
	return (
		<main className="main">
			<h1>Balance : {balance}</h1>
			<h1>Loan : {loan}</h1>

			<Button
				onClick={handleOpenAccount}
				disabled={isOpen}
			>
                Open Account
			</Button>

			<Button
				onClick={handleDeposit}
				disabled={!isOpen}
			>
                Deposit {DEPOSIT_VALUE}
			</Button>

			<Button
				onClick={handleWithdraw}
				disabled={!isOpen}
			>
                Withdraw {WITHDRAW_VALUE}
			</Button>

			<Button
				onClick={handleRequestLoan}
				disabled={!isOpen}
			>
                Request a loan of {LOAN_VALUE}
			</Button>

			<Button
				onClick={handlePayLoan}
				disabled={!isOpen}
			>
                Pay loan
			</Button>

			<Button
				onClick={()=>
					dispatch({ type: ActionType.CLOSEACCOUNT })
				}
				disabled={!isOpen}
			>
                Close Account
			</Button>
		</main>
	);
}

export default Main;
