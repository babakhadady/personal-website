import Visible from "../../hooks/Visible";
import { useRef } from "react";

const Header2 = ({ children, offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <h2 ref={ref} className={shouldShow ? 'visible' : 'notvisible'}
            style={{transform: `translateY(-${offsetY*1.5}px` }}>
            {children}
        </h2>
    )
}

export default Header2