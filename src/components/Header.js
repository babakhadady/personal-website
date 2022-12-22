import Visible from "../hooks/Visible";
import { useRef } from "react";

const Header = ({ children }) => {
    const ref = useRef();
    const shouldShow = Visible(200);

    return (
        <h1 ref={ref} className={shouldShow ? 'visible' : 'notvisible'}>
            {children}
        </h1>
    )
}

export default Header