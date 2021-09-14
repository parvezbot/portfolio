import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home"
import About from "./About"
import SkillContact from "./SkillContact";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <SkillContact/>
      <Footer/>
    </div>
  );
}

export default App;
