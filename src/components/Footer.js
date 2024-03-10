import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const clickInsta = () => {
	window.open("https://www.instagram.com/sungil_sss/", "_blank");
};

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailchimpForm />
					<Col size={12} sm={6}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								href="https://www.instagram.com/sungil_sss/"
								target="_blank"
								onClick={clickInsta}>
								<img src={navIcon3} alt="Icon" />
							</a>
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
