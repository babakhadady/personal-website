import Visible from "../hooks/Visible";
import { useRef } from "react";

const Header2 = ({ children, offset }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <h2 ref={ref} className={shouldShow ? 'visible' : 'notvisible'}>
            {children}
        </h2>
    )
}

export default Header2