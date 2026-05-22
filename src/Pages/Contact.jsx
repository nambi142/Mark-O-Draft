import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "../Css/Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2cp1fat",
        "template_tao6h0g",
        form.current,
        "vXHiolko0v9eEP6DA",
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setMessage("❌ Failed to send message. Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <div>
      <Helmet>
        <title>
          Contact Markodraft Builders | Tirunelveli Construction Company
        </title>

        <meta
          name="description"
          content="Contact Markodraft Builders for house construction, renovation and design services in Tirunelveli. Get a free consultation today."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://markodraft.com/contact" />

        <meta property="og:title" content="Contact Markodraft Builders" />
        <meta
          property="og:description"
          content="Get in touch with Markodraft Builders for construction services in Tirunelveli."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markodraft.com/contact" />
        <meta
          property="og:image"
          content="https://markodraft.com/img/brand.jpeg"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Markodraft Builders",
              "url": "https://markodraft.com/contact",
              "description": "Contact Markodraft Builders for construction services in Tirunelveli.",
              "mainEntity": {
                "@type": "Organization",
                "name": "Markodraft Builders",
                "url": "https://markodraft.com",
                "telephone": "+918190859587",
                "email": "markodraftindia@gmail.com"
              }
            }
          `}
        </script>
      </Helmet>

      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-breadcrumb">
            <Link to="/" className="contact-home-link">
              Home
            </Link>
            <span className="contact-separator"> » </span> Contact
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-container">
          <h2>Contact Us</h2>

          <div className="contact-info-grid">
            <div className="contact-info-box">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <h3>Phone Number</h3>
              <p className="contact-highlight-phone">
                <a href="tel:8190859587">+91 81908 59587</a>
              </p>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                <FiMail />
              </div>
              <h3>Contact Email</h3>
              <p>
                <a href="mailto:markodraftindia@gmail.com">
                  markodraftindia@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <h3>Our Location</h3>
              <address className="contact-highlight-address">
                9, Nachinikinyar Street, Kokkirakulam,
                <br />
                Palaymkottai, Tirunelveli,
                <br />
                Tamilnadu - 627009
              </address>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                <FiClock />
              </div>
              <h3>Business Hours</h3>
              <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
              <p>Sunday – Closed</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="from_phone"
                  placeholder="Phone Number"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a valid 10-digit phone number"
                  maxLength="10"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-row full">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit Now"}
              </button>
              {message && <p className="form-status">{message}</p>}
            </form>

            <div className="contact-image">
              <img src="/img/brand.jpeg" alt="Contact Markodraft Builders" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
