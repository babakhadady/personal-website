import Visible from "../hooks/Visible";
import { useRef } from "react";

const NavBar = ({ children }) => {
    const ref = useRef();
    const shouldShow = Visible(ref, 600);

    return (
        <navbar ref={ref} className={shouldShow ? 'visible' : 'notvisible'}>
            {children}
        </navbar>
    )
}

export default NavBar