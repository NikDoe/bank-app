import { 
	CustomerActionType, 
	TCreateCustomerAction, 
	TCustomerActions, 
	TCustomerState, 
	TUpdateCustomerAction
} from '../../types';

const initialCustomerState: TCustomerState = {
	fullName: '',
	nationalID: 0
};

export default function reducer (
	state = initialCustomerState,
	action: TCustomerActions,
): TCustomerState {
	switch (action.type) {
		case CustomerActionType.CREATE:
		{
			const { fullName, nationalID } = action.payload;
			return {
				...state,
				fullName,
				nationalID
			};
		}
		case CustomerActionType.UPDATE:
			return {
				...state,
				fullName: action.payload
			};
    
		default:
			return state;
	}
}

export function createCustomer (
	fullName: string, 
	nationalID: number
): TCreateCustomerAction {
	return {
		type: CustomerActionType.CREATE,
		payload: {
			fullName,
			nationalID
		}
	};
}

export function updateCustomer (updatedName: string): TUpdateCustomerAction {
	return {
		type: CustomerActionType.UPDATE,
		payload: updatedName
	};
}