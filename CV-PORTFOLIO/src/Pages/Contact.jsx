import React from 'react';

const Contact = () => {
    return (
      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;