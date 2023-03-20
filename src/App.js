import "./App.css";
import { NavElement } from "./components/component/navElement";
import { Footer } from "./components/component/footer";
import React, { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavElement />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
