import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";

const Header = ({ children, offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <h1 ref={ref} className={shouldShow ? 'visible' : 'notvisible'}
            style={{ transform: (`translateY(-${offsetY * 1.5}px`  )}} >
            {children}
        </h1>
    )
}

export default Header