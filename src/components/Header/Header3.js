import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";

const Header3 = ({ children, offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <h3 ref={ref} data-aos="fade-out" data-dura
            style={{
                // transform: `translateY(${offsetY * 0.75}px`,
                
            }}>
            {children}
        </h3>
    )
}

export default Header3