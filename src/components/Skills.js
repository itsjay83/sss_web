import meter1 from "../assets/img/SSS/Programming basic.svg";
import meter2 from "../assets/img/SSS/Algorithm.svg";
import meter3 from "../assets/img/SSS/web.svg";
import meter4 from "../assets/img/SSS/app.svg";
import meter5 from "../assets/img/SSS/Game.svg";
import meter6 from "../assets/img/SSS/AI.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>커리큘럼</h2>
							<p>
								저희 스터디의 커리큘럼은 프로그래밍 기초부터 시작하여 알고리즘,
								게임 개발, 웹 개발, 앱 개발, 인공지능에 이르기까지 포괄적으로
								다루고 있습니다. <br></br>이를 통해 멤버들은 소프트웨어 개발의
								다양한 양상을 경험하며 자신의 관심사와 역량에 맞는 분야를 탐색할
								수 있습니다.<br></br>
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider">
								<div className="item">
									<img src={meter1} alt="Image" />
									<h5>Programming Baisc</h5>
								</div>
								<div className="item">
									<img src={meter2} alt="Image" />
									<h5>Algoritm</h5>
								</div>
								<div className="item">
									<img src={meter3} alt="Image" />
									<h5>Web Development</h5>
								</div>
								<div className="item">
									<img src={meter4} alt="Image" />
									<h5>App Development</h5>
								</div>
								<div className="item">
									<img src={meter5} alt="Image" />
									<h5>Game Development</h5>
								</div>
								<div className="item">
									<img src={meter6} alt="Image" />
									<h5>A.I</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="Image" />
		</section>
	);
};
