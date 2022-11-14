import React, { Component } from 'react';
import { ItemNameNumber } from './phoneName';
import css from '../phonebook/phonebook.module.css';


export class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  changeForm = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
      this.reset();
      const contactName = this.state.name;
      const contactNumber = this.state.number;
      this.props.onSubmit(contactName, contactNumber);
      e.target.name.value = '';
      e.target.number.value = '';
      
  };

  render() {
    return (
      <form
        autoComplete="off"
        className={css.form}
        onSubmit={this.handleSubmitForm}
        onChange={this.changeForm}
      >
        <label>
          Name
          <input
            onChange={this.changeForm}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>
        <label>
          Number
          <input
            onChange={this.changeForm}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>
        <button type="submit">add contact</button>
        <ul>
          <ItemNameNumber />
        </ul>
      </form>
    );
  }
}
