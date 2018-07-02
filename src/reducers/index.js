import { combineReducers } from 'redux';

import Clients from './Clients';
import FilterClients from './FilterClients';
import ShowClients from './ShowClients';



export default combineReducers({
	Clients,
	FilterClients,
	ShowClients
})