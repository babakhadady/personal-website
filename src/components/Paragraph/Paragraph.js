import Visible from "../../hooks/Visible";
import "./style.css";
import { useRef } from "react";

const Paragraph = ({ children, offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <p ref={ref} className={shouldShow ? 'visible' : 'notvisible'}
            style={{ transform: `translateY(-${ offsetY *.99}px` }} >
            {children}
        </p>
    )
}

export default Paragraph