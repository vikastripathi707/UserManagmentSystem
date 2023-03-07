import React from 'react'

function Contact() {
  return (
    <div className='bg-secondary p-5'>
        <h1>Contact Us</h1>
      <p>Feel free to get in touch with us by filling out the form below or by contacting us directly:</p>
      <ul>
        <li>Phone: 555-123-4567</li>
        <li>Email: info@example.com</li>
        <li>Address: 123 Main St, Anytown USA</li>
      </ul>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
