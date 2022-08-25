import logo from "./logo.svg";

import choglat from "./images/choglat.jpg";


import Header from "./components/Header.js";
import Project from "./components/Project.js";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main className="page-top">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={choglat} alt="me at doctors with mask on" style={{ width: 300, height: 500 }} />
            </div>
            <div className="flip-card-back">
              <u><h1>Greg Marzec</h1></u>
              <br />
              <p><strong>Aspiring Coder</strong></p>
              <br />
              <p>Hello! My name is Greg Marzec, im currently a student at the
                Berkeley Coding Boot Camp. This is a portfolio containing projects
                that may or may not be finished yet. I am currently learning about
                HTML, as well as CSS and how to incorporate it properly. Soon we
                will be learning about Javascript, so i will be able to add more
                projects to this page.</p>
            </div>
          </div>
        </div>
        <hr />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
