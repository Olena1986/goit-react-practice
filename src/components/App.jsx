import { Component } from 'react';
import { data } from '../data/users';
import { UsersList } from './usersList/usersList';
import AddForm from './AddForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users: data,
  };

  addUser = userData => {
    const newUser = {
      id: nanoid(),
      ...userData,
    };
    this.setState(prevState => {
      return { users: [...prevState.users, newUser] };
    });
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
        <UsersList users={users} deleteUser={this.deleteUser} />
        <AddForm addUser={this.addUser} />
      </div>
    );
  }
}
