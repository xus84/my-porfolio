import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Projects.css";
import Ecommerce from "./images/3d-online-shopping.jpg";
import AmazonClone from "./images/amazon_react_store.png";
import AmazonClone2 from "./images/product1_amazon_react.png";
import JavascriptStore from "./images/js-store1.png";
import JavascriptStore2 from "./images/js-store2.png";
import WordPress from "./images/wds.png";

export default function Projects() {
  return (
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <div className="projects_container">
        <div className="projects_description">
          <div>
            <Link to="/">
              <span className="projects_arrow">
                <i class="fas fa-long-arrow-alt-left"></i>
              </span>
            </Link>
            I focus on building projects related with{" "}
            <strong>E-Commerce</strong>, using <i class="fab fa-js-square"></i>{" "}
            Javascript and framework as <i class="fab fa-angular"></i> Angular
            and <i class="fab fa-react"></i> React.
          </div>
        </div>

        <br></br>
        {/* <img src={Ecommerce} width="100%" z-index="-1"/> */}

        <div className="container_projects">
          <div className="project_store">
            <span>
              <h4>Vanilla Javascript Store</h4>
            </span>
            <div className="card_project">
              <div>
                <img src={JavascriptStore} width="90%" />
                <img src={JavascriptStore2} width="95%" />
              </div>
            </div>
            <div className="project_link">
              <a href="https://javascript-store.netlify.app/">
                <i class="far fa-arrow-alt-circle-up"></i> Go to project
              </a>
            </div>
          </div>

          <div className="project_store">
            <span>
              <h4>AMAZON Clone React</h4>
            </span>
            <div className="card_project">
              <img src={AmazonClone} width="90%" />
              <img src={AmazonClone2} width="90%" />
            </div>
            <div className="project_link">
              <a href="https://survival-store-2021.netlify.app/">
                <i class="far fa-arrow-alt-circle-up"></i> Go to project
              </a>
            </div>

            <br></br>

            <div className="project_store">
              <span>
                <h4>WordPress</h4>
              </span>
              <div className="card_project">
                <img src={WordPress} width="90%" />
              </div>
              <div className="project_link">
                <a href="https://learningstore364970303.wordpress.com/">
                  <i class="far fa-arrow-alt-circle-up"></i> Go to project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
