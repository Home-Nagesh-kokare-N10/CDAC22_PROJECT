import React from "react";
import './css/App.css';

import{Route,Switch,Link} from "react-router-dom"


const Container = () => {
  return (
    <div>
      <div className="row my-4">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
             News feed
              </strong>
              
              
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src="E:/C-DAC study/ReactJs/my-first-app/public/Images/Banner.svg.svg" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
          Home services
              </strong>
              <h3 className="mb-0">Book services</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">
                <ul>
                  
                  <Link to="/services"><a><li>Applliance Repair</li></a></Link>
                  <li>Home Painting</li>
                  <Link to="/Cleaning"><li>Cleaning and pest</li></Link>
                  </ul>
              </p>
              <a >
                Continue book
              </a>
              <img src="home_ser.jpg" className="stretched-link"/>
            </div>
            <div className="col-auto d-none d-lg-block">
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                World
              </strong>
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width={200}
                height={250}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                Order groscery Online
              </strong>
              <h3 className="mb-0">Post title</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
              <img src="kirana.jpg" className="stretched-link"/>
            </div>
            <div className="col-auto d-none d-lg-block">
             
            </div> 
          </div>
        </div>
      </div>
     
    </div>
  );
};
export default Container;
