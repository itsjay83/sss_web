import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/githubicon.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	const clickInsta = () => {
		window.open("https://www.instagram.com/sungil_sss/", "_blank");
	};

	return (
		<Router>
			<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
				<Container>
					<Navbar.Brand href="/">
						<img src={logo} alt="Logo" style={{ width: 250 }} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="#home"
								className={
									activeLink === "home" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("home")}>
								Home
							</Nav.Link>
							<Nav.Link
								href="#curriculum"
								className={
									activeLink === "skills" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("skills")}>
								Curriculum
							</Nav.Link>
							<Nav.Link
								href="#generation"
								className={
									activeLink === "projects"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("projects")}>
								Generation
							</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a
									href="https://github.com/Sungil-SoftWare-Study"
									target="_blank"
									rel="noopener noreferrer">
									<img src={navIcon2} alt="ig" />
								</a>
							</div>
							<div className="social-icon">
								<a
									href="https://www.instagram.com/sungil_sss/"
									target="_blank"
									rel="noopener noreferrer"
									onClick={clickInsta}>
									<img src={navIcon3} alt="ig" />
								</a>
							</div>
							<a href="#connect">
								<button className="vvd">
									<span>Join SSS</span>
								</button>
							</a>
							{/* <HashLink to="#connect">
								<button className="vvd">
									<span>Join SSS</span>
								</button>
							</HashLink> */}
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};
