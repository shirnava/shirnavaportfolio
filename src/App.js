import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Topbar/>

      {/* inside this div, will call all section components */}
      <div className="sections">
      <Intro/>
      <Portfolio/>
      <Work/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
