import React from "react";

export default function About() {
  return (
    <section id="about">
      <h1 className="title">About</h1>
      <div className="content">
        <div className="container-links">
          <a href="https://github.com/niamordev" target='_blank'>Github</a>
          <a href="https://www.instagram.com/romain_lthl/" target='_blank'>Instagram</a>
          {/* <a href="">E-mail: niamor.development@proton.me</a> */}
        </div>
        <div className="about-me">
        <div className="description">
          <p>
            {" "}
            Hello! I am a French <span className="blue-text">developer web</span> in the front-end field. I'm <span className="blue-text">completely self-taught</span>.
            <br /><br /> I have been programming for about<span className="blue-text"> 1 years </span>now. Here is my
            current tech-stack.
          </p>
        </div>
        <div className="languages">

          <div className="container-box">
          <div className="box">
            <img src="../../../port-ig/assets/images/languages/html.png" alt="" />
            <p>HTML</p>
          </div>
          </div>

          <div className="container-box">
          <div className="box">
            <img src="../../../port-ig/assets/images/languages/sass.png" alt="" />
            <p>SASS</p>
          </div>
          </div>

          <div className="container-box">
          <div className="box">
            <img src="../../../port-ig/assets/images/languages/js.png" alt="" />
            <p>JavaScript</p>
          </div>
          </div>

          <div className="container-box">
          <div className="box">
            <img src="../../../port-ig/assets/images/languages/reactjs.png" alt="" />
            <p>React Js</p>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
