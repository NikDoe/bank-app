import { useSelector } from 'react-redux';
import { selectAccount } from './AccountSelector';

function formatCurrency(value: number) {
	return new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD',
	}).format(value);
}
  
function BalanceDisplay() {
	const { balance } = useSelector(selectAccount);
	
	return <div className='balance'>{formatCurrency(balance)}</div>;
}
  
export default BalanceDisplay;
  