export const Contacts = ({ contactList, onDeleteContact }) => {
  console.log('contactList: ', contactList);
  return (
    <ul className="todoList">
      {contactList.map(({ id, name, number }) => (
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
