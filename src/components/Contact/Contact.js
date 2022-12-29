import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";
import { Icon } from '@iconify/react';


const Contact = ({ children, offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <h3 >

            Contact
            <ul>
                <li className="contact-body">
                    <Icon className="contact-icon" icon="mdi:linkedin" />
                    <a target="_blank" className="contact-text" href="https://www.linkedin.com/in/babak-hadady-50a857201/" >linkedin/babakhadady</a>
                </li>
                <li className="contact-body">
                    <Icon className="contact-icon" icon="mdi:github" />
                    <a target="_blank" className="contact-text" href="https://github.com/babakhadady" >github/babakhadady</a>
                </li>
                <li className="contact-body">
                    <Icon className="contact-icon" icon="material-symbols:mail" />
                    <a className="contact-text" href="mailto:hadadybabak@gmail.com">/babakhadady</a>
                </li>
            </ul>
        </h3>
    )
}

export default Contact