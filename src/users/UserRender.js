import React, { Component } from 'react';
import { connect } from 'react-redux';



class UserRender extends Component {

	activeClassName(e){
		var list = document.getElementsByClassName('ui list active');
		for(var i = 0; i<list.length; i++){
			list[i].className = 'ui list';
		}
		
		e.currentTarget.className ='ui list active';
		console.log(e.currentTarget);

		this.listShow(e.currentTarget);

	}

	listShow(e)	{
		for(var i=0; i<this.props.User.length; i++){
			const listClient = this.props.User[e.id];
			this.props.onShowClient(listClient);
		
		}

	}

	render() {

    return (

				<div className="ui list" id={this.props.data.id} onClick={this.activeClassName.bind(this)}>
            <div className="item">
                <img className="ui avatar image" src={this.props.data.general.avatar} alt="R1" />
                <div className="content">
                    <div className="header">{this.props.data.general.firstName} {this.props.data.general.lastName}</div>
										<div className="job">{this.props.data.job.title}</div>
                </div>
            </div>
        </div>

    );
  }


}
export default connect(state =>({User: state.Clients}),
dispatch=>({
	onShowClient: (client)=>{
	dispatch({ type: 'SHOW_CLIENT', payload:client })}
})
)(UserRender);
