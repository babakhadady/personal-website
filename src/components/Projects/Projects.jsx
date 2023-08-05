import "./style.css";
import Visible from "../../hooks/Visible";
import { useRef } from "react";
import "./style.css";
import { Icon } from "@iconify/react";

const Projects = ({ offset, offsetY }) => {
	const ref = useRef();
	const shouldShow1 = Visible(offset + 100);
	const shouldShow2 = Visible(offset + 300);
	const shouldShow3 = Visible(offset + 500);

	return (
		<div>
			<div
				ref={ref}
				className={"project-container "}
				data-aos="fade"
				style={
					{
						// transform: `translateY(${offsetY * .55}px`,
						// opacity: (shouldShow3 ? `${-1 + .005 * offsetY}` : 0)
					}
				}>
				{/* <div className="image-container">
			<img src={scale} alt="" />
			</div> */}
				<a className="text-header" href="https://outdoorly.onrender.com/">
					<div className={"text-container "}>
						<div className={"text-header"}> OutDoorly</div>
						<div className={"text-header2 "}>
							FullStack National Parks Website
						</div>
						<div className={"text-body "}>
							Created a fully responsive React.js application allowing users to
							submit search queries, browse and upload reviews on National
							Parks.
						</div>
						<div className="text-body">
							Utilized Amazon Web Services’ S3 for cloud storage and retrieval
							of user submitted park images.
						</div>
						<div className="text-body">
							Applied the OAuth 2.0 protocol for authentication to leverage
							Google Cloud, allowing authorization of Google account connection
							with OutDoorly to maintain secure user information.
						</div>
						<div className="text-body">
							Designed a data model with Mongoose for park and user information
							to be stored on an MongoDB database accessible through a RESTful
							Node.js backend.
						</div>
						<div className="text-tech">
							<Icon className="iconv2" icon="logos:react" />
							<Icon className="iconv2" icon="logos:redux" />
							<Icon className="iconv2" icon="devicon:materialui" />
							<Icon className="iconv2" icon="logos:sass" />
							<Icon className="iconv2" icon="vscode-icons:file-type-node" />
							<Icon className="iconv2" icon="simple-icons:express" />
							<Icon className="iconv2" icon="devicon:mongodb-wordmark" />
							<Icon className="iconv2" icon="logos:aws" />
							<Icon className="iconv2" icon="skill-icons:gcp-dark" />
						</div>
					</div>
				</a>
			</div>
		
			<div ref={ref} className={"project-container "} data-aos="fade">
				<a
					className="text-header"
					href="http://www.github.com/babakhadady/playify">
					<div className={"text-container "}>
						<div className={"text-header"}> Playify </div>
						<div className={"text-header2 "}>Spotify Playlist Generator</div>
						<div className={"text-body "}>
							Designed a responsive frontend in React.js with React BootStrap
							allowing for submission of artists by a user.
						</div>
						<div className={"text-body"}>
							Utilizes OAUTH 2.0 protocol alongside RESTFul Spotify API to allow
							users to securely connect their Spotify accounts to Playify.
						</div>
						<div className={"text-body"}>
							Constructed a secure backend built on Node.js with Express that
							retrieves submitted artists songs through GET requests.
						</div>
						<div className={"text-body"}>
							Dynamically named playlist allows connected users to customize
							their generated playlist, visible through PUT requests.
						</div>
						<div className="text-tech">
							<Icon className="iconv2" icon="logos:react" />
							<Icon className="iconv2" icon="vscode-icons:file-type-node" />
							<Icon className="iconv2" icon="simple-icons:express" />
							<Icon className="iconv2" icon="logos:bootstrap" />
						</div>
					</div>
				</a>
			</div>

			<div ref={ref} className={"project-container larger"} data-aos="fade">
				<a
					className="text-header"
					href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=310">
					<div className={"text-container "}>
						<div className={"text-header"}> InsightUBC </div>
						<div className={"text-header2 "}>
							UBC Course Database Application
						</div>
						<div className={"text-body "}>
							Fullstack application allowing users to query databases containing
							UBC course information built on TypeScript and Node.
						</div>
						<div className={"text-body"}>
							Designed and Implemented a robust frontend built on React with
							Bootstrap{" "}
						</div>
						<div className="text-body">
							Developed with Test Driven Design using Mocha and Chai to develop
							a test suite achieving 100% code coverage.
						</div>
						<div className="text-body">
							Utilized the Agile/Scrum process for efficient project delivery
							and to meet deadlines.
						</div>
						<div className="text-body">
							Implemented a robust backend which parses user queries on UBC
							courses which produces filtered results that match given criteria.
						</div>
						<div className="text-body">
							Enforced linting standards using ESLint to ensure understandable
							code.
						</div>
						<div className="text-tech">
							<Icon className="iconv2" icon="logos:react" />
							<Icon className="iconv2" icon="logos:bootstrap" />
							<Icon className="iconv2" icon="vscode-icons:file-type-node" />
							<Icon className="iconv2" icon="simple-icons:express" />
							<Icon className={"iconv2"} icon="logos:typescript-icon" />
							<Icon className="iconv2" icon="logos:mocha" />
							<Icon className="iconv2" icon="logos:chai" />
						</div>
					</div>
				</a>
			</div>

			<div
				ref={ref}
				className={"project-container "}
				data-aos="fade"
				style={
					{
						// transform: `translateY(${offsetY * .65}px`,
						// opacity: (shouldShow2 ? `${-1 + .007 * offsetY}` : 0)
					}
				}>
				{/* <div className={"image-container "}
			>
			<img src={scale} alt="" />
			</div> */}
				<a
					className="text-header"
					href="http://www.github.com/babakhadady/quickcards">
					<div className={"text-container "}>
						<div className={"text-header"}> QuickCards </div>
						<div className={"text-header2 "}>Java Swing Flashcard App</div>
						<div className={"text-body "}>
							Constructed a GUI Based flashcard app on Java Swing where users
							can edit, remove and add flashcards.
						</div>
						<div className="text-body">
							Utilized JUnit 5 alongside TDD to implement a cohesive test suite.
						</div>
						<div className="text-body">
							Followed OOP principles and other design principles to ensure no
							coupling and cohesion within the project.{" "}
						</div>
						<div className="text-tech">
							<Icon className={"iconv2"} icon="logos:java" />
							<Icon className="iconv2" icon="devicon:junit-wordmark" />
						</div>
					</div>
				</a>
			</div>

			<div
				ref={ref}
				className={"project-container "}
				data-aos="fade"
				style={
					{
						// transform: `translateY(${offsetY * .55}px`,
						// opacity: (shouldShow3 ? `${-1 + .005 * offsetY}` : 0)
					}
				}>
				{/* <div className="image-container">
			<img src={scale} alt="" />
			</div> */}
				<a
					className="text-header"
					href="http://www.github.com/babakhadady/studyspot">
					<div className={"text-container "}>
						<div className={"text-header"}> StudySpot </div>
						<div className={"text-header2 "}>UBC Study Spaces Application</div>
						<div className={"text-body "}>
							{" "}
							Constructed a UBC study space website using React.js for nwHacks
							2023 allowing users to browse, and add reviews for campus spaces.
						</div>
						<div className="text-body">
							{" "}
							Implemented a backend on Node.js and a database with MongoDB Atlas
							allowing persistence of ratings and reviews on UBC spaces.
						</div>
						<div className="text-body">
							{" "}
							Incorporated a searchbar using React hooks for searching and
							selecting of spaces with suggestions.{" "}
						</div>
						<div className="text-body">
							{" "}
							Designed a frontend through React Bootstrap allowing for adding
							and viewing of the existing reviews of spaces around campus stored
							in created database.
						</div>
						<div className="text-tech">
							<Icon className="iconv2" icon="logos:react" />
							<Icon className="iconv2" icon="logos:bootstrap" />
							<Icon className="iconv2" icon="vscode-icons:file-type-node" />
							<Icon className="iconv2" icon="simple-icons:express" />
							<Icon className="iconv2" icon="devicon:mongodb-wordmark" />
						</div>
					</div>
				</a>
			</div>

			<div
				ref={ref}
				className={"project-container "}
				data-aos="fade"
				style={
					{
						// transform: `translateY(${offsetY * .55}px`,
						// opacity: (shouldShow3 ? `${-1 + .005 * offsetY}` : 0)
					}
				}>
				{/* <div className="image-container">
			<img src={scale} alt="" />
			</div> */}
				<a
					className="text-header"
					href="https://github.com/babakhadady/babakhadady.github.io">
					<div className={"text-container "}>
						<div className={"text-header"}> Personal Website </div>
						<div className={"text-header2 "}>React Website </div>
						<div className={"text-body "}>
							{" "}
							Designed a personal website with multiple components using
							React.js.
						</div>
						<div className="text-body">
							{" "}
							Implemented various scroll effect animations and a responsive
							particle background.
						</div>
						<div className="text-body">
							{" "}
							Used React hooks to implement timed fade animations and a
							disappearing navigation bar.
						</div>
						<div className="text-tech">
							<Icon className="iconv2" icon="logos:react" />
							<Icon className="iconv2" icon="logos:css-3" />
							<Icon className="iconv2" icon="logos:html-5" />
							<Icon className="iconv2" icon="logos:javascript" />
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Projects;
