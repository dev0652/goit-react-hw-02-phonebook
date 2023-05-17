import PropTypes from 'prop-types';
import { List, ListItem } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  // Sort contacts in alphabetical order
  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <List>
      {sortedContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {/* Contact name and phone number */}
          <p className="contact-text">
            {name}: {number}
          </p>

          {/* Delete contact button */}
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </ListItem>
      ))}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
