const clients = [];


export default function ShowClients(state=clients, action){

	if(action.type === 'SHOW_CLIENT'){

		return action.payload;
		
	}

	return state;

}