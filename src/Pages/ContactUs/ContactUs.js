function ContactUs() {
  return (  <div className="container">
  <div className="mt-5 mb-5">
    <h1>Contact Us</h1>
  </div>
  <div>
    <h3 style={{textDecoration:'underline'}}>Contact Information:</h3>
    <ul>
      <li>
        <p>E-mail: spinneys@gmail.ee</p>
      </li>
      <li>
        <p>Phone: 0146364646</p>
      </li>
      <li>
        <p>Address: 123 Main Street, City, Country, ZIP</p>
      </li>
    </ul>
  </div>

  <div className="form border rounded p-3" style={{width: 400}}>
    <p className="m-1">Name:</p>
    <input className="mb-2" type="text"></input>
    <p className="m-1">E-mail:</p>
    <input className="mb-2" type="email"></input>
    <p className="m-1">Phone:</p>
    <input className="mb-2" type="text"></input>
    <p className="m-1">Message:</p>
    <textarea className="mb-2" type="text"></textarea>
    <div><button className="btn btn-dark">Send</button></div>
  </div>

  <div className="mt-3">
    <p>Please use this form to reach out to us for any inquiries, feedback, or assistance you may need. We aim to respond to all messages within 24-48 hours.</p>
  </div>
  </div>);
}

export default ContactUs;