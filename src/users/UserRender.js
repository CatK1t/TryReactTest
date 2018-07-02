import React, { Component } from 'react';


class UserRender extends Component {

	activeClassName(e){
		var list = document.getElementsByClassName('ui list active');
		for(var i = 0; i<list.length; i++){
			list[i].className = 'ui list';
		}

		e.currentTarget.className ='ui list active'

		
	}

	render() {

    return (

				<div className="ui list" onClick={this.activeClassName.bind(this)}>
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

export default UserRender;