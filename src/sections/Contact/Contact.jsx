import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [result, setResult] = useState('');
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'A valid email is required';
        }
        if (!formData.message) errors.message = 'Message cannot be empty';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const onSubmit = async (event) => {
        event.preventDefault();
    
        // Validate the form before submitting
        if (!validateForm()) {
          setResult('Please fill in all fields correctly.');
          return;
        }
    
        setResult('Sending...');
    
        // Prepare form data for API submission
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('access_key', '9d53ce25-b44d-400b-8911-cba14b84e2f1');
        formDataToSubmit.append('name', formData.name);
        formDataToSubmit.append('email', formData.email);
        formDataToSubmit.append('message', formData.message);
    
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSubmit,
          });
    
          const data = await response.json();
    
          if (data.success) {
            setResult('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form after success
            setFormErrors({}); // Reset errors
          } else {
            setResult(data.message || 'Something went wrong.');
          }
        } catch (error) {
          setResult('There was an error submitting the form. Please try again later.');
          console.error(error);
        }
      };
    
      return (
        <section id="contact" className={styles.container}>
          <h1 className="sectionTitle">Contact</h1>
          <form onSubmit={onSubmit}>
            <div className="formGroup">
              <label htmlFor="name" hidden>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {formErrors.name && <span className="error">{formErrors.name}</span>}
            </div>
    
            <div className="formGroup">
              <label htmlFor="email" hidden>
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
    
            <div className="formGroup">
              <label htmlFor="message" hidden>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              {formErrors.message && <span className="error">{formErrors.message}</span>}
            </div>
    
            <input className="hover btn" type="submit" value="Submit" />
          </form>
    
          {/* Display result or error message */}
          <div className="result">
            {result && <p>{result}</p>}
          </div>
        </section>
  );
}

export default Contact;
