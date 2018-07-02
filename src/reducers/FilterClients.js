const clients = '';


export default function FilterClients(state=clients, action){

	if(action.type === 'FIND_CLIENT'){

		return action.payload;
		
	}

	return state;

}