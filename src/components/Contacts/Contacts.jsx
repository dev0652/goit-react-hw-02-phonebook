import { BsTrash3 } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Button, List, ListItem } from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
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
          <Button onClick={() => onDeleteContact(id)}>
            <BsTrash3 />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;

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
