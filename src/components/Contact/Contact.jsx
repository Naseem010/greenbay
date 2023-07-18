import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa";
import './contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="contact">
    <div className='contact1'>
    <Navbar/>
      <p>CONTACT US</p>
      </div>
      <div className="container mt-5">
      <h3 className="mb-3">Get In Touch</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    <div className='talk2us'>
<h3>Talk To Us</h3>
<div className='talk2us1'>
<AiOutlineMail />
<div >
<p>EMAIL</p>
<h4>something@ggvra.in</h4>
</div>
</div>
    </div>
    </div>
  );
};

export default Contact;
