import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form />
        </Section>

        <Section title="Contacts"></Section>
      </div>
    );
  }
}
