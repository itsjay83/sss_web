import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Curriculum } from "./components/Skills";
import { Generation } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Curriculum />
			<Generation />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
