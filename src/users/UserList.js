import React, { Component } from 'react';
import UserRender from './UserRender';
import { connect } from 'react-redux';



class UserList extends Component {

	


	showClient(){
		return this.props.clients.map((el,k)=>{
			return <UserRender key={k} data={el} id={k} />
			
		})
		
	}
	searchClient(){
		
		this.props.onFindClient(this.searchInput.value);

	}

	render() {
    return (

		<div className="Lists"> 
			<div>
				
			<div className="ui search">
				<div className="ui icon input">
					<input className="prompt" placeholder="Find client..." type="text" ref={(input)=>{ this.searchInput = input }} onChange={this.searchClient.bind(this)} />
					<i className="search icon"></i>
				</div>
				<div className="results"></div>

			</div>
				
			</div>
			<div className="clients">{this.showClient()}</div>
		</div>
		
    );
  }


}

export default connect(state =>({
	clients: state.Clients.filter(el => el.general.firstName.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.general.lastName.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.general.avatar.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.job.company.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.job.title.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.contact.email.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.contact.phone.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.address.street.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.address.city.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.address.zipCode.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1 || el.address.country.toLowerCase().indexOf(state.FilterClients.toLowerCase()) !== -1)
	}),
	dispatch => ({
		onFindClient: (client)=>{
			dispatch({ type: 'FIND_CLIENT', payload:client })
		}
	})
	)(UserList);
