import React from 'react'
import "./Projects.css"
import { projects } from '../../data'

const Projects = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="project-top-div">

        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 text-center">
            <img src="/images/location.jpg" className='mt-4' alt="" style={{width : "150px", height : "180px"}} />
            <h3 className="white-color mt-3">Qlab</h3>
            <p className='white-color'>@qlab</p>
            <p className='white-color'>Followers 1M+</p>

            <div className="projects-btns d-flex flex-column">
              <button className="btn-navbar btn mt-4 mt-4">Ongoing Activities</button>
              <button className="btn-navbar btn mt-4 mt-2">Testimonials</button>
              <button className="btn-navbar btn mt-4 mt-4">Our Previous Projects</button>
              <button className="btn-navbar btn mt-4 mt-4">Case Studies</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-12">
          <div className="row">
            {
              projects.map((project) => (
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center mt-4">
                <img src={project.img} className="projects-img" alt="" />
                <p className="white-color mt-2 mb-2">{project.name}</p>
                <button className="btn-navbar btn mt-2 mb-2" style={{width : "120px"}}>{project.button}</button>
                </div>
              ))
            }
            </div>
          </div>

        </div>
        <div className="project-top-div mt-5">

        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 text-center">
            <img src="/images/location.jpg" className='mt-4' alt="" style={{width : "150px", height : "180px"}} />
            <h3 className="white-color mt-3">Qlab</h3>
            <p className='white-color'>@qlab</p>
            <p className='white-color'>Followers 1M+</p>

            <div className="projects-btns d-flex flex-column">
              <button className="btn-navbar btn mt-4 mt-4">Ongoing Activities</button>
              <button className="btn-navbar btn mt-4 mt-2">Testimonials</button>
              <button className="btn-navbar btn mt-4 mt-4">Our Previous Projects</button>
              <button className="btn-navbar btn mt-4 mt-4">Case Studies</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-12">
          <div className="row">
            {
              projects.map((project) => (
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center mt-4">
                <img src={project.img} className="projects-img" alt="" />
                <p className="white-color mt-2 mb-2">{project.name}</p>
                <button className="btn-navbar btn mt-2 mb-2" style={{width : "120px"}}>{project.button}</button>
                </div>
              ))
            }
            </div>
          </div>

        </div>
        <div className="project-top-div mt-5">

        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 text-center">
            <img src="/images/location.jpg" className='mt-4' alt="" style={{width : "150px", height : "180px"}} />
            <h3 className="white-color mt-3">Qlab</h3>
            <p className='white-color'>@qlab</p>
            <p className='white-color'>Followers 1M+</p>

            <div className="projects-btns d-flex flex-column">
              <button className="btn-navbar btn mt-4 mt-4">Ongoing Activities</button>
              <button className="btn-navbar btn mt-4 mt-2">Testimonials</button>
              <button className="btn-navbar btn mt-4 mt-4">Our Previous Projects</button>
              <button className="btn-navbar btn mt-4 mt-4">Case Studies</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-12">
          <div className="row">
            {
              projects.map((project) => (
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center mt-4">
                <img src={project.img} className="projects-img" alt="" />
                <p className="white-color mt-2 mb-2">{project.name}</p>
                <button className="btn-navbar btn mt-2 mb-2" style={{width : "120px"}}>{project.button}</button>
                </div>
              ))
            }
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects