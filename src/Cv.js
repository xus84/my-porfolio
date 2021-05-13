import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Cv() {
  return (
    <div>
      <Navbar />
      <div>
        <Link to="/">
          <i class="fas fa-long-arrow-alt-left"></i>
        </Link>
      </div>

      <div className="project_store">
         <span><h4>Curriculum Vitae</h4></span>
            <div className="card_project">
                <div>.</div>
            </div>
        </div>
    </div>
  );
}
