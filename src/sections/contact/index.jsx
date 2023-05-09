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

  const handleInputChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`formData:`, formData);

    // Clear the form
    setFormData(formDataDefultValues);
  };

  return (
    <div className='contact'>
      <div className='container'>
        <div className='description'>
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text>{contactModel.text}</Text>
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
            <button type='submit' onClick={handleSubmit} className='btn'>
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
