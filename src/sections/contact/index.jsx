import './index.css';
import React, { useState } from 'react';
import Text from '../../components/text';
import Heading from '../../components/heading';
import contactModel from '../../models/Contact.model';

const Contact = () => {
  const formDataDefultValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    serviceInterest: '',
  };
  const [formData, setFormData] = useState(formDataDefultValues);
  const [formSubmitedSucesful, setFormSubmitedSucesful] = useState('');
  const [successTimeoutId, setSuccessTimeoutId] = useState(null);

  const handleInputChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const setFormText = () => {
    // Clear any old timeout
    if (successTimeoutId) {
      clearTimeout(successTimeoutId);
    }

    // Set a new timeout and save its ID
    const newTimeoutId = setTimeout(() => {
      setFormSubmitedSucesful('');
    }, 5000);

    setSuccessTimeoutId(newTimeoutId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // VALIDATION:
    // Check if phone number is 10 digits long
    if (formData.phoneNumber.length !== 10) {
      alert('Please enter a 10-digit phone number.');
      return;
    }
    // Check if all fields are filled out
    for (let key in formData) {
      if (formData[key] === '') {
        alert('Please fill out all fields.');
        return;
      }
    }

    // if validation will not make any action then...
    // Clear the form
    setFormSubmitedSucesful(
      'Thank you for your submission! Our support team will review your inquiry and get back to you within 24 hours.'
    );
    console.log(`formData:`, formData);

    setFormData(formDataDefultValues);
    setFormText();
  };

  return (
    <div className='contact'>
      <div className='container'>
        <div className='description'>
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text textAlign='justify'>{contactModel.text}</Text>
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className='form-row'>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder='First Name'
                required
              />
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder='Last Name'
                required
              />
            </div>

            <input
              type='tel'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder='Phone Number'
              pattern='[0-9]{10}'
              title='Phone number should be 10 digits long.'
              required
            />

            <input
              type='text'
              name='serviceInterest'
              value={formData.serviceInterest}
              onChange={handleInputChange}
              placeholder='What service are you interested in?'
              required
            />

            <div className='form-row'>
              <button type='submit' onClick={handleSubmit} className='button'>
                SUBMIT NOW
              </button>
              <Text>{formSubmitedSucesful}</Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
