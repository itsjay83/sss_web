import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Generation = () => {
	const projects = [
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: projImg1,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: projImg2,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: projImg3,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: projImg1,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: projImg2,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: projImg3,
		},
	];

	return (
		<section className="project" id="Generation">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}>
									<h2>역대 활동</h2>
									<p>
										성일정보고등학교 개발 스터디는 선후배간의 멘토 멘티로
										이루어지며 <br />
										서로 자유롭게 의견을 나누고 대회 준비, 프로젝트 개발 등
										활동을 진행하며 실력과 경험을 늘리고 있습니다.
										<br /> 아래 역대 멤버란은 졸업당시 대학, 회사를 기준으로
										기재합니다.
									</p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab">
											<Nav.Item>
												<Nav.Link eventKey="first">1기</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">2기</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">3기</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible ? "animate__animated animate__slideInUp" : ""
											}>
											<Tab.Pane eventKey="first">
												<Row>
													<section
														style={{
															width: "100%",
															height: "100%",
															display: "flex",
															flexDirection: "column",
															alignItems: "center",
														}}>
														<div style={{ flex: "1", display: "flex" }}>
															<col1
																style={{ flexbasis: "50%", margin: "0 10px" }}>
																<p>
																	2021 제 2회 해킹하는 부엉이들 웹 세미나 참석 :
																	김태한
																	<br />
																	2021 학생용 해킹 노트 온라인 Conference 참석 :
																	김태한
																	<br />
																	2022 제 3회 해킹하는 부엉이들 웹 세미나 참석 :
																	김태한
																	<br />
																	2022 지방기능경기대회[게임개발] 은상 : 김태한
																	<br />
																	2022 현대 오토에버 화이트해커 양성 프로그램
																	합격 : 강주훈
																	<br />
																	2022 전국기능경기대회[게임개발] 장려상 :
																	김태한
																	<br />
																	2022 사이버가디언즈 CTF 본선 진출 : 김태한,
																	강주훈, 강주호, 박재우
																	<br />
																	2022 KAIT SFPC 경북 오픈런상 : 김태한, 박재우,
																	송주환, 고준성
																	<br />
																	2022 마이크로비트 글로벌 챌린지 4등 : 손태영
																	<br />
																	2022 성남교육지원청 표창장 : 김태한
																	<br />
																	2022 교내 프로그래밍 경진대회 금상 : 송주환
																	<br />
																	2022 교내 프로그래밍 경진대회 장려상 : 김태한,
																	고준성
																	<br />
																	2022 성남사립중고등학교장회 표창장 : 김태한
																	<br />
																	2022 제 4회 해킹하는 부엉이들 웹 세미나 참석 :
																	강주호
																	<br />
																	2022 자소서 쓰기 대회 장려상 : 배성진, 김태한
																	<br />
																	2022 Amazon Web Services 구축 과정 수료 :
																	김태한, 강주호, 강주훈, 박재우
																	<br />
																</p>
															</col1>
															<col1
																style={{ flexbasis: "50%", margin: "0 10px" }}>
																<p>
																	2023 제 26회 해킹캠프 참가 : 김태한, 강주호,
																	강주훈, 박재우
																	<br />
																	2023 제 26회 해킹캠프 CTF 3위 : 강주호, 김태한
																	<br />
																	2023 지방 상업경진대회 장려상 : 송주환
																	<br />
																	2023 지방기능경기대회[게임개발] 은상 : 김태한
																	<br />
																	2023 경기도교육감 표창장 : 김태한
																	<br />
																	2023 가짜연구소 7기 (Cheese cRust) Runner :
																	김태한
																	<br />
																	2023 KISA 침해사고 분석을 위한 사이버포렌식
																	실무 수료 : 깅태한
																	<br />
																	2023 현대 오토에버 화이트해커 양성 프로그램
																	합격 : 강주호
																	<br />
																	2023 YISF 본선 진출 : 김태한
																	<br />
																	2023 CodeGate 컨퍼런스 참석 : 김태한, 강주호,
																	강주훈
																	<br />
																	2023 교내 프로그래밍 경진대회 장려상 : 고준성,
																	김태한
																	<br />
																	2022 전국기능경기대회[게임개발] 우수상 :
																	김태한
																	<br />
																	2023 제 4회 JBU CTF 우수상 : 김태한
																	<br />
																	2023 전국 상업경진대회 장려상 : 송주환
																	<br />
																	2023 경기도 유공자 대만 해외 연수 : 김태한
																	<br />
																	2023 현대 오토에버 경진대회 우수상 : 강주호
																	<br />
																</p>
															</col1>
														</div>
													</section>
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<section
													style={{
														width: "100%",
														height: "100%",
														display: "flex",
														flexDirection: "column",
														alignItems: "center",
													}}>
													<div style={{ flex: "1", display: "flex" }}>
														<col1
															style={{
																flexbasis: "50%",
																margin: "0 10px",
															}}>
															<p>
																2022 Intel A.I for Youth Program 참여 : 이제석,
																박준호
																<br />
																2022 삼성 주니어 SW 아카데미 참여 : 이제석,
																박준호, 손은규
																<br />
																2023 교내 프로그래밍 경진대회 금상 : 최 환<br />
																2023 교내 프로그래밍 경진대회 은상 : 이제석
																<br />
																2023 교내 프로그래밍 경진대회 동상 : 김지호,
																박준호, 정은교
																<br />
																2023 중기청 일본 국외 연수 : 이제석, 박준호
																<br />
																2023 Devfest Songdo 2023 참여 : 이제석
																<br />
																2023 현대 오토에버 경진대회 입상 : 정은교
																<br />
															</p>
														</col1>
													</div>
												</section>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<p></p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
