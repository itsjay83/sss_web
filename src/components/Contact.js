import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
	const formInitialDetails = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState("신청하러 가기");
	const [status, setStatus] = useState({});

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};
	const buttonClicked = () => {
		window.open("https://forms.gle/1Ymxo72rviMXDoAKA", "_blank");
	};
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	setButtonText("Sending...");
	// 	let response = await fetch("http://localhost:5000/contact", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json;charset=utf-8",
	// 		},
	// 		body: JSON.stringify(formDetails),
	// 	});
	// 	setButtonText("Send");
	// 	let result = await response.json();
	// 	setFormDetails(formInitialDetails);
	// 	if (result.code == 200) {
	// 		setStatus({ succes: true, message: "Message sent successfully" });
	// 	} else {
	// 		setStatus({
	// 			succes: false,
	// 			message: "Something went wrong, please try again later.",
	// 		});
	// 	}
	// };

	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<img
									className={
										isVisible ? "animate__animated animate__zoomIn" : ""
									}
									src={contactImg}
									alt="Contact Us"
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}>
									<h2>SSS 신청하기</h2>
									{/* <form onSubmit={handleSubmit}> */}
									<form>
										<p>
											모집 일정 : 2024년 3월 11일 ~ 3월 28일 까지<br></br>
											지원 자격 : 성일정보고등학교 재학생 누구나<br></br>
											<b>
												주의 사항 : 구글폼 작성시 학교 계정(@sungil-i.kr)을
												사용하세요
											</b>
											<br></br>
											학교 계정으로 진입 할 줄 모르거나, 모종의 오류가
											발생한경우
											<br></br>
											'010-9882-9831 31120-이제석' 으로 연락주세요
										</p>
										{/* <Row>
											<Col size={12} sm={6} className="px-1">
												<input
													type="text"
													value={formDetails.firstName}
													placeholder="First Name"
													onChange={(e) =>
														onFormUpdate("firstName", e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className="px-1">
												<input
													type="text"
													value={formDetails.lasttName}
													placeholder="Last Name"
													onChange={(e) =>
														onFormUpdate("lastName", e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className="px-1">
												<input
													type="email"
													value={formDetails.email}
													placeholder="Email Address"
													onChange={(e) =>
														onFormUpdate("email", e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className="px-1">
												<input
													type="tel"
													value={formDetails.phone}
													placeholder="Phone No."
													onChange={(e) =>
														onFormUpdate("phone", e.target.value)
													}
												/>
											</Col>
											<Col size={12} className="px-1">
												<textarea
													rows="6"
													value={formDetails.message}
													placeholder="Message"
													onChange={(e) =>
														onFormUpdate("message", e.target.value)
													}></textarea>
											</Col>
											{status.message && (
												<Col>
													<p
														className={
															status.success === false ? "danger" : "success"
														}>
														{status.message}
													</p>
												</Col>
											)}
										</Row> */}

										<button onClick={buttonClicked}>
											<span>{buttonText}</span>
										</button>
									</form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
