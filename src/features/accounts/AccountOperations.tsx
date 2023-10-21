import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, payLoan, requestLoan, withdraw } from './AccountSlice';
import { selectAccount } from './AccountSelector';
import { AppDispatch, CurrencyValue } from '../../types';

function AccountOperations() {
	const [depositAmount, setDepositAmount] = useState<number>(0);
	const [withdrawalAmount, setWithdrawalAmount] = useState<number>(0);
	const [loanAmount, setLoanAmount] = useState<number>(0);
	const [loanPurpose, setLoanPurpose] = useState('');
	const [currency, setCurrency] = useState(CurrencyValue.USD);

	const { 
		balance,
		loan,
		loanPurpose: purpose,
	} = useSelector(selectAccount);
	const dispatch = useDispatch<AppDispatch>();

	function handleDeposit() {
		dispatch(deposit(depositAmount, currency));
		setDepositAmount(0);
	}

	function handleWithdrawal() {
		if(withdrawalAmount > balance) return;

		dispatch(withdraw(withdrawalAmount));
		setWithdrawalAmount(0);
	}

	function handleRequestLoan() {
		if(loan >  0) return;

		dispatch(requestLoan(loanAmount, loanPurpose));
	}

	function handlePayLoan() {
		dispatch(payLoan());
	}

	const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;

		if (Object.values(CurrencyValue).includes(selectedValue as CurrencyValue)) {
			setCurrency(selectedValue as CurrencyValue);
		}
	};

	return (
		<div>
			<h2>Your account operations</h2>
			<div className='inputs'>
				<div>
					<label>Deposit</label>
					<input
						type='number'
						value={depositAmount}
						onChange={(e) => setDepositAmount(+e.target.value)}
					/>
					<select
						value={currency}
						onChange={handleCurrencyChange}
					>
						<option value={CurrencyValue.USD}>US Dollar</option>
						<option value={CurrencyValue.EUR}>Euro</option>
						<option value={CurrencyValue.GBP}>British Pound</option>
					</select>

					<button onClick={handleDeposit}>Deposit {depositAmount}</button>
				</div>

				<div>
					<label>Withdraw</label>
					<input
						type='number'
						value={withdrawalAmount}
						onChange={(e) => setWithdrawalAmount(+e.target.value)}
					/>
					<button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
					</button>
				</div>

				<div>
					<label>Request loan</label>
					<input
						type='number'
						value={loanAmount}
						onChange={(e) => setLoanAmount(+e.target.value)}
						placeholder='Loan amount'
					/>
					<input
						value={loanPurpose}
						onChange={(e) => setLoanPurpose(e.target.value)}
						placeholder='Loan purpose'
					/>
					<button onClick={handleRequestLoan}>Request loan</button>
				</div>

				<div>
					<span>Pay back ${loan} {loan ? 'for' : ''} {purpose}</span>
					<button onClick={handlePayLoan}>Pay loan</button>
				</div>
			</div>
		</div>
	);
}

export default AccountOperations;
