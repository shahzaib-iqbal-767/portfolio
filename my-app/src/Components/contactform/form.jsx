import React, { useState } from "react";
import "./form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill out all fields");
      return;
    }

    console.log("Form Submitted:", formData);
    setSubmitted(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">

        <h4>Send Us a Message</h4>
        <h1>Contact Form</h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          rows="6"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>

        {submitted && <p className="success-msg">Message Sent Successfully ✔</p>}
      </form>
    </div>
  );
};

export default ContactForm;
