import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './UserListShow.css';

class UserListShow extends Component {


	creatIconClient() {
		console.log(this.props.client);

		if(this.props.client.length === 0){
			console.log('this.props.client');
		}else{
			return <div className="clientShow">
								<div className="imgBlock">
									<div><img src={this.props.client.general.avatar} alt="Avatar"/></div>
								</div>
								<div className="ContentBlock">
									<div><h2><span>Name: </span> {this.props.client.general.firstName}</h2></div>
									<div><h2><span>Last name: </span>{this.props.client.general.lastName}</h2></div>
									<br />
									<div><span>Job:</span> 
										<div> Title: {this.props.client.job.title}</div>
										<div> Company: {this.props.client.job.company}</div>
									</div>
									<br />
									<div><span>Address:</span> 
										<div> Street: {this.props.client.address.street}</div>
										<div> City: {this.props.client.address.city}</div>
										<div> Zip Code: {this.props.client.address.zipCode}</div>
										<div> Country: {this.props.client.address.country}</div>
									</div>
									<br />
									<div><span>Contacts:</span> 
										<div> Email: {this.props.client.contact.email}</div>
										<div> Phone: {this.props.client.contact.phone}</div>
									</div>
								</div>
							</div>			
		}				
	}

	render() {
    return (
      <Segment className="UserShow">
				
				{this.creatIconClient()}
				
			</Segment>
    );
  }


}

export default connect(state =>({
  client: state.ShowClients
}))(UserListShow);