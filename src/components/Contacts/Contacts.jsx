import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="todoList">
      {contacts.map(({ id, name, number }) => (
        <li className="contacts-list-item" key={id}>
          {/* Contact name and phone number */}
          <p className="contact-text">
            {name}: {number}
          </p>

          {/* Delete contact button */}
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
