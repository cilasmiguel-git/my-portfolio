import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SocialLinks from "./components/Sociallinks";
import About from "./components/About"
import Myportfolios from "./components/Myportfolios"
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Myportfolios/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
