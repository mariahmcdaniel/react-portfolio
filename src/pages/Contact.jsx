import React from 'react';
import Form from '../components/Form';
import './style.css';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p id="contMsg">
        I'd love to connect with you! Please fill out the form and I will be in touch.
      </p>
      < Form/>
    </div>
  );
}