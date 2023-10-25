import React, { useState, useEffect } from 'react';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Отримати список контактів з API при завантаженні компоненту
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const handleDeleteContact = (id) => {
    // Видалення контакту за його id
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h2>Список контактів</h2>
      <ContactTable contacts={contacts} onDeleteContact={handleDeleteContact} />
      {showForm ? (
        <ContactForm
          onSave={(newContact) => {
            setContacts([...contacts, newContact]);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Додати контакт</button>
      )}
    </div>
  );
};

export default Contacts;
