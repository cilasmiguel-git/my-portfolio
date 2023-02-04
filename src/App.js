import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SocialLinks from "./components/Sociallinks";
import About from "./components/About"
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Portfolios from "./components/Portfolios";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolios/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
