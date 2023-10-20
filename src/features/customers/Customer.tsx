import { useSelector } from 'react-redux';
import { selectCustomer } from './CustomerSelectors';

function Customer() {
	const { fullName } = useSelector(selectCustomer);
	return <h2>👋 Welcome, {fullName}</h2>;
}
  
export default Customer;
  