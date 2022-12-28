import Visible from "../../hooks/Visible";
import "./style.css"
import { useRef } from "react";
import { Fade } from "react-reveal";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import "../../App/App"

const NavBar = () => {
    const ref = useRef();
    const shouldShow = Visible(25);

    return (
        <section ref={ref} id="transition" className={(shouldShow ? 'visible' : 'notvisible') + ' navbar'}>
            <Fade delay={2000}>
                <ul className="details" >
                    <li><a  className="nav" href='#experiences'>EXPERIENCES</a></li>
                    <li><a className="nav" href="downloads/babak hadady.docx" download>RESUME</a></li>
                    <li><a target="_blank" className="nav" href="https://www.linkedin.com/in/babak-hadady-50a857201/">LINKEDIN</a></li>
                    {/* <li><a href="#aboutme">ABOUT ME</a></li> */}
                </ul>
            </Fade>
            <Outlet></Outlet>
        </section>
    )
}

export default NavBar