import "./style.css";
import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";
import scale from "../config/images/scale.jpg"

const Projects = ({ offset, offsetY }) => {
    const ref = useRef();
    const shouldShow1 = Visible(offset + 100);
    const shouldShow2 = Visible(offset + 300);
    const shouldShow3 = Visible(offset + 500);


    return (
        <div >
            <div ref={ref} className={"project-container "}  data-aos="fade"
                style={{
                    // transform: `translateY(${offsetY * .75}px`,
                    // opacity: (shouldShow1 ? `${-1 + .009 * offsetY}` : 0)
                }}>
                <div className="image-container">
                    <img src={scale} alt="" />
                </div>
                <div className="text-container">
                    <div className="text-header "> QuickCards </div>
                    <div className="text-body"> Body of text</div>
                    <div className="text-body">Second Line</div>
                </div>
            </div>

            <div ref={ref} className={"project-container "} data-aos="fade"
                style={{
                    // transform: `translateY(${offsetY * .65}px`,
                    // opacity: (shouldShow2 ? `${-1 + .007 * offsetY}` : 0)
                }}>

                <div className={"image-container "}
                >
                    <img src={scale} alt="" />
                </div>
                <div className={"text-container "}>
                    <div className={"text-header "}> QuickCards </div>
                    <div className={"text-body "}> Body of text</div>
                    <div className={"text-body "}>Second Line</div>
                </div>
            </div>

            <div ref={ref} className={"project-container " } data-aos="fade"
                style={{
                    // transform: `translateY(${offsetY * .55}px`,
                    // opacity: (shouldShow3 ? `${-1 + .005 * offsetY}` : 0)
                }}>
                <div className="image-container">
                    <img src={scale} alt="" />
                </div>
                <div className="text-container">
                    <div className="text-header "> QuickCards </div>
                    <div className="text-body"> Body of text</div>
                    <div className="text-body">Second Line</div>
                </div>
            </div>
        </div>

    )
}

export default Projects