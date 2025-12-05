import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Toast from '../components/Toast';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'info' }), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    console.log('Form submitted:', formData);
    showToast('Message sent successfully!', 'success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="page">
      <Toast 
        message={toast.message} 
        type={toast.type} 
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <section className="section">
        <h1>Get In Touch</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
          Have a project in mind? Let&apos;s discuss how we can work together
        </p>

        <div className="contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">Contact Information</h2>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <FiMail className="contact-info__icon" />
                <div>
                  <h3>Email</h3>
                  <a href="nasrintahsilizada8896@gmail.com">nasrintahsilizada8896@gmail.com</a>
                </div>
              </div>

              <div className="contact-info__item">
                <FiPhone className="contact-info__icon" />
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+93 (77) 2354443">+93 (77) 2354443</a>
                </div>
              </div>

              <div className="contact-info__item">
                <FiMapPin className="contact-info__icon" />
                <div>
                  <h3>Location</h3>
                  <p>kabul afghanistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span style={{ color: 'var(--secondary)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span style={{ color: 'var(--secondary)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span style={{ color: 'var(--secondary)' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
