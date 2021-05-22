import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Works from "./pages/works";
import Contact from "./pages/contact";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/works" component={Works} />
				<Route exact path="/contact" component={Contact} />
			</Router>
		</div>
	);
}

export default App;
