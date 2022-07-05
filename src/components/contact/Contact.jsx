import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_74e29x9",
      "template_rkvcemm",
      form.current,
      "-4vT7U8gBuE04bUGC"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dhanusharao12@gmail.com</h5>
            <a
              href="mailto:dhanusharao12@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a Mail
            </a>
          </article>
          <article className="contact__option">
            <TbBrandTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>dhanushrao12</h5>
            <a
              href="https://t.me/dhanushrao12"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+917760544591</h5>
            <a
              rel="noreferrer"
              href="https://wa.me/+917760544591"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
