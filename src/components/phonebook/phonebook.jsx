import React, { Component } from 'react';
import css from '../phonebook/phonebook.module.css';
import { ItemName } from './phoneName';

export class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  //   changeForm = (e) => {
  //       this.setState({
  //         e.currentTarget.value,

  //     });
  //   };

  changeForm = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  render() {
    return (
      <form className={css.form}>
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
        <button>add contact</button>
        <ul>
          <ItemName />
        </ul>
      </form>
    );
  }
}
