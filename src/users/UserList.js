import React, { Component } from 'react';
import UserRender from './UserRender';
import { connect } from 'react-redux';



class UserList extends Component {


	showClient(){
		return this.props.clients.map((el,k)=>{
			return <UserRender key={k} data={el} />
			
		})
		
	}
	searchClient(e){
		
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
	clients: state.Clients.filter(el => el.job.title.includes(state.FilterClients))
	}),
	dispatch => ({
		onFindClient: (client)=>{
			dispatch({ type: 'FIND_CLIENT', payload:client })
		}
	})
	)(UserList);
