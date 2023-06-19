import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SocialLinks from "./components/Sociallinks";
import About from "./components/About"
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <MyProjects/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
