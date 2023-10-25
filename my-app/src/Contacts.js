import React, { useState } from 'react';

const ContactForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Відправка нового контакту на сервер або інші дії з ним
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ім'я:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Прізвище:</label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Телефон:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
      </div>
      <div>
        <button type="submit">Зберегти</button>
        <button type="button" onClick={onCancel}>Скасувати</button>
      </div>
    </form>
  );
};

export default ContactForm;
import React, { useState } from 'react';

const ContactForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Відправка нового контакту на сервер або інші дії з ним
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ім'я:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Прізвище:</label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Телефон:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
      </div>
      <div>
        <button type="submit">Зберегти</button>
        <button type="button" onClick={onCancel}>Скасувати</button>
      </div>
    </form>
  );
};

export default ContactForm;
