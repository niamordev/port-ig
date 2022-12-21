import { useState, useEffect } from "react";
import "./styles/style.css";
import DataProjects from "./data/DataProjects.json";
import Introduction from "./components/introduction/Introduction";
import MyProjects from "./components/my-projects/MyProjects";
import { gsap } from 'gsap'
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [dataProjects, setDataProjects] = useState([]);

  



  useEffect(() => {
    setDataProjects(DataProjects);
  }, []);

  
  const opacity = (elem, delay, duration ) => {
    gsap.fromTo(
      elem,
      {
        opacity:0,
      },
      {
        opacity:1,
        delay:delay || 0.6,
        duration: duration ||0.6
      }
    )
  }

  const slideTopToBottom = (elem, delay, duration ) => {
    gsap.fromTo(
      elem,
      {
        translateY:-900,
      },
      {
        translateY:0,
        delay:delay || 0.6,
        duration: duration ||0.6
      }
    )
  }

  const slideRightToLeft = (elem, delay, duration ) => {
    gsap.fromTo(
      elem,
      {
        translateX:900,
      },
      {
        translateX:0,
        delay:delay || 0.6,
        duration: duration ||0.6
      }
    )
  }


  

  return (
    <>
    <header>
    <Nav  slideRightToLeft={slideRightToLeft}/>
    </header>
    <main>
      <Introduction opacity={opacity} slideTopToBottom={slideTopToBottom} />
      <About />
      <MyProjects dataProjects={dataProjects} opacity={opacity} />
      </main>
      <Footer />

      </>

  );
}

export default App;
