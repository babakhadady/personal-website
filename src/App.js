import "./App.css";
import { useEffect, useState, useRef } from "react";
import { Fade } from "react-reveal";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Header2 from "../components/Header/Header2";
import Header3 from "../components/Header/Header3";
import Projects from "../components/Projects/Projects"
import Paragraph from "../components/Paragraph/Paragraph";
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact";
import Experiences from "../components/Experiences/Experiences";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground";
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function App() {
	const [height, setHeight] = useState(0)
	const ref = useRef(null)

	useEffect(() => {
		document.body.style.backgroundColor = '#0f0f0f';
		document.title = "Babak Hadady";
		AOS.init();

		setHeight(document.documentElement.offsetHeight);
	}, [])

	const [e, setElement] = useState(null)


	const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

	useEffect(() => {
		function updatePosition() {
			setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
		}

		window.addEventListener('scroll', updatePosition)
		updatePosition()

		return () => window.removeEventListener('scroll', updatePosition)
	}, [])


	return (
		<div>
			<script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>

			<NavBar />

			<section className="container-main">
				<Header offset={25} offsetY={10 + scrollPosition.scrollY}>
					<Fade bottom delay={50}>
						Babak
					</Fade>
				</Header>

				<Header2 offset={125} offsetY={10 + scrollPosition.scrollY}>
					<Fade delay={500}>
						CS Student and Teaching Assistant
					</Fade>
				</Header2>
				<Paragraph offset={150} offsetY={scrollPosition.scrollY}>
					<Fade delay={1000}>
						I'm a fourth year Undergraduate Computer Science student
					</Fade>
				</Paragraph>
				<Paragraph offset={175} offsetY={scrollPosition.scrollY}>
					<Fade delay={1150}>
						and Teaching Assistant at the University of British Columbia.
					</Fade>
				</Paragraph>
				<Paragraph offset={200} offsetY={scrollPosition.scrollY}>
					<Fade delay={1300}>
						I'm seeking an intern opportunity for September 2023.
					</Fade>
				</Paragraph>

			</section>

			<section className="projects" id="projects">
				<Header3 offset={500} offsetY={scrollPosition.scrollY}>
					Projects
				</Header3>

				<Projects offset={1} offsetY={scrollPosition.scrollY} />

			</section>

			<section className="skills-container" >
				<Header3 offset={1100} offsetY={-900 + scrollPosition.scrollY}>
					Skills
				</Header3>
				<Skills id="experience" offset={1100} offsetY={-1000 + scrollPosition.scrollY} />
			</section>

			<section className="experience"  >
				<Experiences offset={15000} offsetY={-1100 + scrollPosition.scrollY}>

				</Experiences>
			</section>

		<Contact/>
			<ParticlesBackground height={document.documentElement.offsetHeight} />

		{  console.log(height)}
		</div >
	);
}
