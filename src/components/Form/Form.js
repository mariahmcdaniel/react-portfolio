import React, { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';

function Form() {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
   
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
   
    e.preventDefault();

   
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      
      return;
     
    }
    if (!name) {
      setErrorMessage('Your name is required.');
      
      return;
     
    }
    if (!message) {
      setErrorMessage(
        `A message is required for your inquiry`
      );
      return;
    }
    alert(`Hello ${name}`);

    
    setname('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <p>Hello {name}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <textarea
          value={message}
          name="message"
          rows="2" 
          cols="30"
          onChange={handleInputChange}
          type="message"
          placeholder="Type your message here"
        />
        <button type="button" id="submitBtn" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
