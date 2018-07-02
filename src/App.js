import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from './users/UserList';
import UserListShow from './users/UserListShow';
import { Segment } from 'semantic-ui-react';


import './App.css';


class App extends Component {


  render() {

    return (
      <div className="app">
				<Segment>
					<UserList />
					<UserListShow />
				</Segment>
      </div>
    );
  }
}

export default connect(state =>({
  clients: state.Clients
}))(App);
