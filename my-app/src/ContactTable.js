import React from 'react';

const ContactTable = ({ contacts, onDeleteContact }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Телефон</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.phone}</td>
            <td><button onClick={() => onDeleteContact(contact.id)}>Видалити</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
