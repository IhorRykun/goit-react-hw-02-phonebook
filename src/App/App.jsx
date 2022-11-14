import { PhoneBook } from 'components/phonebook/phonebook';
import { Component } from 'react';

export class App extends Component {
    addContact = (contactName, contactNumber) => {
        const checkName = this.state.contacts.find(
            contact => contact.name.toLowerCase() === contactName.toLowerCase()
        );
    }

  render() {
    return (
      <div>
        <PhoneBook addContact={this.addContact} contacts={this.onChange} />;
      </div>
    );
  }
}
