import React, { Fragment } from 'react'

import './Form.css'

class ContactForm extends React.Component {
  static defaultProps = {
    name: 'Travelr Contact Form',
    action: '',
  }

  render() {
    const { name, action } = this.props

    return (
      <div class="container">
        <form
          className="Form"
          id={name}
          name={name}
          action={action}
		      target="_top"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value={name} />

          <label for="fullname">Full Name *</label>
          <input type="text" id="fullname" name="fullname" placeholder="Your full name.." required />

          <label for="email">E-Mail *</label>
          <input type="email" id="email" name="email" placeholder="Your email address.." required />

          <label for="phone">Phone</label>
          <input type="number" id="phone" name="phone" placeholder="Your phone number.." />

          <label for="subject">Subject *</label>
          <input type="text" id="subject" name="subject" placeholder="Your subject.." required />

          <label for="message">Message *</label>
          <textarea id="message" name="message" rows="6" placeholder="Enter your message here.."></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ContactForm
