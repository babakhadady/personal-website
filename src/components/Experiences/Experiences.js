import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";
import Paragraph from "../Paragraph/Paragraph";

const Experiences = ({ children, offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(offset);

    return (
        <div>
            <h3 ref={ref} className={shouldShow ? 'visible' : 'notvisible'}
                style={{ transform: `translateY(-${offsetY * 1.5}px` }}
                 >
                Experiences
            </h3>
            <ul style={{ transform: `translateY(-${offsetY * 1.25}px` }}>
                <li>
                    <div className="experience-container">
                        <div className="experience-heading">
                            University of British Columbia Teaching Assistant</div>
                        <div className="experience-date">
                            January 2021 - Present
                        </div>
                        <div className="experience-body">CPSC 100 Computational Thinking</div>
                        <div className="experience-body">CPSC 107 Systematic Program Design</div>
                        <div className="experience-body">CPSC 110 Computation, Programs, and Programming </div>
                        <div className="experience-body">CPSC 210 Software Construction </div>

                        <div className="experience-body"> Work alongside professors during class lectures to assist in student learning.  </div>
                        <div className="experience-body">Supervise laboratories with 30 students where core content is facilitated.</div>
                        <div className="experience-body"> Coordinate with a teaching team to develop strategies to strengthen learning.</div>
                    </div>
                </li>

                <li>
                    <div className="experience-container">
                        <div className="experience-heading">
                            University of British Columbia
                        </div>
                        <div className="experience-date">
                            September 2020 - Present
                        </div>
                        <div className="experience-body">Third year in Bachelor of Science </div>
                        <div className="experience-body">Major in Computer Science</div>
                        <div className="experience-body">Minor in Mathematics</div>

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Experiences