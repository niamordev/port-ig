import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataProjects from "../../data/DataProjects.json";

export default function MyProjects({ dataProjects }) {
  const [filters, setFilters] = useState(null);

  const handleFilterProjects = (e) => {
    setFilters(e);
  };

  return (
    <section id="myProjects">
      <h1 className="title">My project</h1>
      <div className="content">
        <span className="intro">
          <h2>Some of my training projects </h2>
          <p>
            (Thanks to{" "}
            <a href="https://www.frontendmentor.io/" target="_blank">
              Frontend Mentor{" "}
            </a>
            website)
          </p>
        </span>
        <div className="filter">
          <button
            onClick={() => handleFilterProjects(null)}
            className={filters === null ? "btn-filter-selected" : null}
          >
            All
          </button>
          <button
            onClick={() => handleFilterProjects(true)}
            className={filters === true? "btn-filter-selected" : null}
          >
            With React
          </button>
          <button
            onClick={() => handleFilterProjects(false)}
            className={
              filters === false? "btn-filter-selected" : null  
            }
          >
            Without React
          </button>
        </div>

        <div className="all-projects">
          {dataProjects.map((project) => {
            console.log(project.description);
            if (project.useReact === filters || filters === null)
              return (
                <div>
                  <div className="container-project">
                    <img src={project.img} alt="" />
                    <div className="description">
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <p>{tag}</p>
                        ))}
                      </div>
                      <div className="">
                        <p>{project.description}</p>
                      </div>

                      <div className="links-to-projects">
                        <a
                          href={project.codeSource}
                          target="_blank"
                          className="description-link"
                        >
                          <img
                            src="../../port-ig/assets/icons/icon-open-new-tab-purple.svg"
                            alt=""
                          />{" "}
                          Source code
                        </a>

                        <a
                          className="open-project description-link"
                          href={project.link}
                          target="_blank"
                        >
                          <img
                            src="../../port-ig/assets/icons/icon-open-new-tab-black.svg"
                            alt=""
                          />{" "}
                          Visit website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </section>
  );
}
