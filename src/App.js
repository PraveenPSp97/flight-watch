import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MapView from "./components/MapView";
import "bootstrap/dist/css/bootstrap.css";
import { FlightDataProvider } from "./components/FlightDataProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <FlightDataProvider>
        <Header />
        <MapView />
        <Footer />
      </FlightDataProvider>
    </div>
  );
}

export default App;
