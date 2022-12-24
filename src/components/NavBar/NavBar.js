import Visible from "../../hooks/Visible";
import "./style.css"
import { useRef } from "react";
import { Fade } from "react-reveal";

const NavBar = () => {
    const ref = useRef();
    const shouldShow = Visible(25);

    return (
        <section ref={ref} id="transition" className={(shouldShow ? 'visible' : 'notvisible') + ' navbar'}>
            <Fade delay={2000}>
                <ul className="details" >
                    <li><a href="">CONTACT</a></li>
                    <li><a href="downloads/babak hadady.docx" download>RESUME</a></li>
                    <li><a href="https://www.linkedin.com/in/babak-hadady-50a857201/">LINKEDIN</a></li>
                    <li><a href="#experience">EXPERIENCES</a></li>
                    <li><a href="#aboutme">ABOUT ME</a></li>
                </ul>
            </Fade>
        </section>
    )
}

export default NavBar