import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'John', phone: '123-123-1234'},
    { id: 2, firstName: 'Jacob', phone: '124-124-1235'},
    { id: 3, firstName: 'Jingle-Heimer', phone: '125-125-1236'},
  ]}

  render () {
    return(
      <div>
        <Header size='huge' color='grey' textAlign='center'>Contact List</Header>
      </div>
    )
  }
}


export default App;
