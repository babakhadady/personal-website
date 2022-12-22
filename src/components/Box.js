import Visible from "../hooks/Visible";
import { useRef } from "react";

const Box = ({ children }) => {
    const ref = useRef();
    const shouldShow = Visible(1200);

    return (
        <span ref={ref} className={"box " + (shouldShow ? 'visible' : 'notvisible')}>
            {children}
        </span>
    )
}

export default Box