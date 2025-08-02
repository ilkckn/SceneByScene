import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    }); 
    setSubmittedMessage('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Hero Section */}
        <div className="contact-hero">
          <h1 className="contact-title">
            Get In <span className="highlight">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Have questions about our platform? Want to suggest a book or movie for analysis? 
            We'd love to hear from you and help you discover new stories.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="form-title">Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
            {submittedMessage && <p className="success-message">{submittedMessage}</p>}
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              
              <div className="faq-item">
                <h3 className="faq-question">How can I suggest a book or movie for analysis?</h3>
                <p className="faq-answer">
                  Use the contact form above to send us your suggestions! We review all submissions 
                  and prioritize content based on community interest and availability.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Do you offer educational partnerships?</h3>
                <p className="faq-answer">
                  Yes! We work with schools, universities, and educational institutions to provide 
                  literature and film analysis resources. Contact us to learn more about our educational programs.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">How quickly do you respond to inquiries?</h3>
                <p className="faq-answer">
                  We typically respond to all inquiries within 24-48 hours during business days. 
                  For urgent matters, please mention it in your subject line.
                </p>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
