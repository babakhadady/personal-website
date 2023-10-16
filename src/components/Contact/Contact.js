import "./styles.scss";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <ul className="contact-list">
      <li className="contact-element">
        <Icon className="contact-icon" icon="mdi:linkedin" />
        <a
          target="_blank"
          rel="noreferrer"
          className="contact-text"
          href="https://www.linkedin.com/in/babak-hadady-50a857201/">
          linkedin/babakhadady
        </a>
      </li>
      <li className="contact-element">
        <Icon className="contact-icon" icon="mdi:github" />
        <a
          target="_blank"
          className="contact-text"
          rel="noreferrer"
          href="https://github.com/babakhadady">
          github/babakhadady
        </a>
      </li>
      <li className="contact-element">
        <Icon className="contact-icon" icon="material-symbols:mail" />
        <a className="contact-text" href="mailto:hadadybabak@gmail.com">
          /babakhadady
        </a>
      </li>
    </ul>
  );
}

export default Contact;
