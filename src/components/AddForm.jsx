import { Component } from 'react';

export class AddForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addUser({ ...this.state });
    this.setState({ name: '', email: '' });
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Email:{' '}
          <input name="email" value={email} onChange={this.handleChange} />
        </label>
        <button> Save </button>
      </form>
    );
  }
}

export default AddForm;
