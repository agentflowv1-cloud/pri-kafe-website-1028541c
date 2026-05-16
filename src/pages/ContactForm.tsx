import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, email, message);
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
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