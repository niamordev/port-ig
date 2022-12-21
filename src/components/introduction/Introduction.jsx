import React from "react";
import { useEffect } from "react";

export default function Home({ handleTest, opacity }) {

  useEffect(() => {
    opacity("#text", ".6", "2")
    opacity("#text1", "1.5", "2")
    opacity("#text2", "3", "2")
    opacity("#btn1", "3", "2")
  }, [])
  return (
    <section id="introduction">

      <div className="txt-home">
        <h1 id="text">
          Hello, I'm <span className="blue-text" id="text1">Niamor.</span>{" "}
        </h1>
        <p id="text2">A french Front-end developper web .</p>
        <a href="#about" id="btn1" className="view-more">
          View more
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              fill="#b6beca"
              d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
