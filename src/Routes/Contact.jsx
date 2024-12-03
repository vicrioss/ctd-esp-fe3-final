import React from 'react';
import { useGlobalContext } from '../Components/utils/global.context';
import Form from '../Components/Form';

const Contact = () => {
  const { state } = useGlobalContext();
  const { theme } = state;

  return (
    <div className={`contact-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
