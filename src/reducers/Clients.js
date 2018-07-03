const clients = require('../users/clients.json');

export default function Clients(state=clients, action){
	clients.map((el,k)=>{
		return el.id = k
	})


	return state;

}