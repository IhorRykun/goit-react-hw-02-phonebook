import React, { Component } from 'react';
import css from '../phonebook/phonebook.module.css';

export class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <form className={css.form}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button>add contact</button>
      </form>
    );
  }
};
