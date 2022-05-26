import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact Us/Contact";
import Documentation from "./components/Documentation/Documentation";
import Terms from "./components/Terms  of Use/TermsOfUse";
import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("home");
  const changeName = (value) => {
    setState(value);
  };

  return (
    <div>
      <Header changeName={changeName} />
      {state === "home" && <Home />}
      {state === "about" && <About />}
      {state === "contact" && <Contact />}
      {state === "documentation" && <Documentation />}
      {state === "termsofuse" && <Terms />}
    </div>
  );
}

export default App;
