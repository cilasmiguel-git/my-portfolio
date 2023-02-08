import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SocialLinks from "./components/Sociallinks";
import About from "./components/About"
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projetos from "./components/Projetos.jsx";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Projetos/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
