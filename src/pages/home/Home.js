import React from "react";
import "./Home.css";
import { projects, topCategories, topDevelopers } from "../../data";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row home-topbar">
          <div className="col-lg-6 col-md-6 col-sm-12 left-col mb-5 mt-5">
            <h1 className="white-color mt-3">
              Not Just Another Digital Agency
            </h1>
            <p className="white-color mt-2 mb-5">
              We specilaize in providing innovative digital solutions to help
              your business grow and succeed in the ever-changing online
              landscape
            </p>

            <div className="home-btns">
              <button className="btn btn-navbar me-4">Explore</button>
              <button className="btn btn-navbar">Get a Quote</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 right-col">
            <h1 className="white-color text-center">Top Categories</h1>
            <hr className="white-color" />

            <div className="row">
              {topCategories.map((category) => (
                <>
                  <div className="col-6 col-lg-4 col-md-4 col-sm-6 text-center">
                    <img src={category.img} className="categories-img" alt="" />
                    <p className="white-color category-name">{category.name}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="top-developers mt-4">
          <h1 className="white-color text-center">
            Top Developers in our team
          </h1>
          <hr className="white-color mt-4" />

          <div className="developers-team">
            <div className="row">
              {topDevelopers.map((developer) => (
                <>
                  <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-center">
                    <img src={developer.img} className="developer-img" alt="" />
                    <h3 className="white-color mt-2 mb-2">{developer.name}</h3>
                    <button className="btn-navbar btn mt-2 mb-2">
                      Linkedin
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="projects mt-5">
          <h1 className="white-color text-center">Projects we mostly work on</h1>
          <hr className="white-color mt-3" />

          <div className="top-projects">
                <div className="row">
                    {
                        projects.map((project) => (
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                                <img src={project.img} className="projects-img" alt="" />
                                <h3 className="white-color mt-2 mb-2">{project.name}</h3>
                                <button className="navbar-btn btn mt-2 mb-2">{project.button}</button>
                            </div>
                        ))
                    }
                </div>
          </div>
        </div>

        <div className="technologies mt-5">
                    <h1 className="white-color text-center">Technologies we work in</h1>
                    <hr className="white-color mt-3" />
        </div>
      </div>
    </>
  );
};

export default Home;
