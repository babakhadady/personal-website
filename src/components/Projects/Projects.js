import "./style.css";
import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";
import scale from "../config/images/scale.jpg"

const Projects = ({ offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <div>
            <div ref={ref} id="project-container" className={shouldShow ? 'visible' : 'notvisible'}
                style={{
                    transform: `translateY(-${offsetY * .8}px`,
                    opacity: `${-1 + .009 * offsetY}`
                }}>
                <div className="image-container">
                    <img src={scale} />
                </div>
                <div className="text-container">
                    <div className="text-header "> QuickCards </div>
                    <div className="text-body"> Body of text</div>
                    <div className="text-body">Second Line</div>
                </div>
            </div>

            <div ref={ref} id="project-container" className={shouldShow ? 'visible' : 'notvisible'}
                style={{
                    transform: `translateY(-${offsetY * .7}px`,
                    opacity: `${-1 + .007 * offsetY}`
                }}>
                <div className="image-container">
                    <img src={scale} />
                </div>
                <div className="text-container">
                    <div className="text-header "> QuickCards </div>
                    <div className="text-body"> Body of text</div>
                    <div className="text-body">Second Line</div>
                </div>
            </div>

            <div ref={ref} id="project-container" className={shouldShow ? 'visible' : 'notvisible'}
            style={{
                transform: `translateY(-${offsetY * .6}px`,
                opacity: `${-1 + .005 * offsetY}`
            }}>
                <div className="image-container">
                    <img src={scale} />
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