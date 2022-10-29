import "./App.css";
import AboutManage from "./Components/AboutManage";
import Banner from "./Components/Banner";
import DetailSection from "./Components/DetailSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HeroSection/>
      <DetailSection/>
      <AboutManage/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
