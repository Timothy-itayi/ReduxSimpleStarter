import React, { Component } from 'react';
import ContactList from '../containers/ContactList'
import ContactDetail from '../containers/ContactDetail'

export default class App extends Component {
  render() {
    return (
      <div>
      	<ContactList />
      	<ContactDetail />
      </div>
    );
  }
}