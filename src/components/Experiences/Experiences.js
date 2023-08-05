import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";
import Paragraph from "../Paragraph/Paragraph";
import Header3 from "../Header/Header3";

const Experiences = ({ children, offset, offsetY }) => {
	const ref = useRef();
	const shouldShow = Visible(offset);

	return (
		<div>
			<Header3>Experiences</Header3>
			<ul>
				<li>
					<div className="experience-container">
						<div className="experience-heading">
							University of British Columbia Teaching Assistant
						</div>
						<div className="experience-date">January 2021 - Present</div>
						<div className="experience-body">
							{" "}
							Collaborated with professors during class lectures to assist with
							student learning.
						</div>
						<div className="experience-body">
							{" "}
							Supervised laboratories of 30 students where core content is
							facilitated.
						</div>
						<div className="experience-body">
							{" "}
							Coordinated with a teaching team to develop strategies to
							strengthen learning.
						</div>
						<div className="experience-body">
							{" "}
							Conducted office hours for students to seek additional help in
							course content and prepare for upcoming examinations.
						</div>
						<div className="experience-body">
							{" "}
							Guided students in developing a course project in Java using
							various design principles such as OOP and implement features such
							as a GUI using Java Swing and data persistence using JSON.
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Experiences;
