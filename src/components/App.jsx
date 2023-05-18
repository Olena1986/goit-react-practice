import { Component } from 'react';
import { data } from '../data/users';
import { UsersList } from './usersList/usersList';

export class App extends Component {
  state = {
    users: data,
  };

  deleteUser = id => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <UsersList users={users} deleteUser={this.deleteUser } />
      </div>
    );
  }
}
