import Visible from "../hooks/Visible";
import { useRef } from "react";

const Paragraph = ({ children }) => {
    const ref = useRef();
    const shouldShow = Visible(ref, 300);

    return (
        <p ref={ref} className={shouldShow ? 'visible' : 'notvisible'}>
            {children}
        </p>
    )
}

export default Paragraph