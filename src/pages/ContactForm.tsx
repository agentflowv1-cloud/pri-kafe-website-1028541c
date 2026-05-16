import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/contact', {
        name,
        email,
        message
      });
      if (response.status === 200) {
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <br />
        <button type="submit">Send</button>
        {sent && <p>Message sent successfully!</p>}
      </form>
    </div>
  );
};

export default ContactForm;