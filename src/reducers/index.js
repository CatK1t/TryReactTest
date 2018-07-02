import { combineReducers } from 'redux';

import Clients from './Clients'
import FilterClients from './FilterClients'

export default combineReducers({
	Clients,
	FilterClients,
})