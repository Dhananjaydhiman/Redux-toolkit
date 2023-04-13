import "./App.css";
import Navbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserDetails from "./Component/UserDetails";
import Store from "./Store/Store";
import { Provider } from "react-redux";

function App() {
	return (
		<>
			<Provider store={Store}>
				<Navbar />
				<div className="container mt-5">
					<UserDetails />
				</div>
			</Provider>
		</>
	);
}

export default App;
