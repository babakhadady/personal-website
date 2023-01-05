import Visible from "../../hooks/Visible";
import "./style.css";
import { useRef } from "react";
import { Icon } from '@iconify/react';


const Skills = ({ children, offset, offsetY }) => {
    const ref = useRef();
    const shouldShow = Visible(300 + offset);

    return (

        <div ref={ref} className={"skills "} data-aos="fade"
            style={{
                // transform: `translateY(-${offsetY * .99}px`
            }}
        >

            <ul className={"skills-ul"}>
                <ul >
                    <li >
                        <Icon className={"icon"} icon="vscode-icons:file-type-cpp3" />
                        <p className="skill">C++</p>
                    </li>
                    <li  >
                        <Icon className={"icon"} icon="logos:c" />
                        <p className="skill">C</p>

                    </li>
                    <li  >
                        <Icon className={"icon"} icon="logos:java" />
                        <p className="skill">Java</p>
                    </li>
                </ul>

                <ul>
                    <li  >
                        <Icon className={"icon"} icon="vscode-icons:file-type-html" />
                        <p className="skill">HTML</p>

                    </li>
                    <li  >
                        <Icon className={"icon"} icon="vscode-icons:file-type-css" />
                        <p className="skill">CSS</p>
                    </li>
                    <li  >
                        <Icon className={"icon"} icon="logos:javascript" />
                        <p className="skill">JavaScript</p>
                    </li>
                </ul>


                <ul>
                    <li >
                        <Icon className={"icon"} icon="logos:react" />
                        <p className="skill">React</p>

                    </li>
                    <li >
                        <Icon className={"icon"} icon="file-icons:latex" />
                        <p className="skill">TeX</p>

                    </li>
                    <li  >
                        <Icon className={"icon"} icon="logos:git-icon" />
                        <p className="skill" >Git</p>

                    </li>
                </ul>

                <ul>
                    <li>
                        <Icon className="icon express" icon="simple-icons:express" />
                        <p className="skill">Express </p>

                    </li>

                    <li>
                        <Icon className="icon" icon="vscode-icons:file-type-node" />
                        <p className="skill">Node.js</p>
                    </li>

                    <li>
                        <Icon className="icon" icon="logos:bootstrap" />
                        <p className="skill"> Bootstrap</p>
                    </li>
                </ul>








            </ul>
        </div >
    )
}

export default Skills