import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/sss_logo.png";
import { ArrowRightCircle, UiRadios } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="aligh-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}>
									<span className="tagline">Sungil Software Study</span>
									<h1>
										Developing, Studying, Dreaming, Growing, and Advancing as a
										group of students.
										{/* {`Hi! We Are SSS`}{" "}
										<span
											className="txt-rotate"
											dataPeriod="1000"
											data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
											<span className="wrap">{text}</span>
										</span> */}
									</h1>
									<p>
										성일정보고등학교의 Sungil Software Study에 오신 것을
										환영합니다! 저희는 개발자를 꿈꾸는 열정적인 학생들의
										모임으로, 성일정보고등학교 내에서 활발하게 활동하고 있는
										개발 스터디 그룹입니다. 선후배 간의 멘토멘티 시스템을 통해,
										우리는 서로의 지식과 경험을 공유하며 함께 성장해가고
										있습니다.
									</p>
									<a href="#connect">
										<button onClick={() => console.log("connect")}>
											SSS 신청하기 <ArrowRightCircle size={25} />
										</button>
									</a>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__zoomIn" : ""
									}>
									<img
										src={headerImg}
										alt="Header Img"
										style={{ borderRadius: 25 }}
									/>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
