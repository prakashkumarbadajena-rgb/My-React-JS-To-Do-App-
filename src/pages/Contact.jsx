import "./Contact.css";
function Contact() {

  return (
    <div className="contact-page">

      <div className="contact-container">

        {/* Left Section */}
        <div className="contact-info">

          <h1>Contact Us</h1>

          <p>
            Have questions or feedback? We'd love to hear from you.
            Fill out the form and our team will get back to you soon.
          </p>

          <div className="info-box">
            <h3>Email</h3>
            <span>support@todoapp.com</span>
          </div>

          <div className="info-box">
            <h3>Phone</h3>
            <span>+91 98765 43210</span>
          </div>

          <div className="info-box">
            <h3>Location</h3>
            <span>Bhubaneswar, Odisha, India</span>
          </div>

        </div>

        {/* Right Section */}
        <div className="contact-form">

          <h2>Send Message</h2>

          <form>

            <div className="input-group">
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;