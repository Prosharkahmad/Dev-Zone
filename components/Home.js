import React from "react";
import { Link } from "react-router-dom";
import n from "./n.jpg";
//import web from "../src/logo.svg"
export default function Home() {
  return (
    <>
      <div className="fluid text-center bg-primary ">
        <div className="row p-2" style={{ fontWeight: "bold" }}>
          <div className="col-12 col-sm-6 col-md-2">
            <div className="m-2" style={{ fontWeight: "bold" }}>
              <Link className="navbar-brand text-white" to="/">
                Dev Zone
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-10">
            <div className="row justify-content-end">
              {/* Use justify-content-end to push items to the right */}

              <div className="col-6 col-sm-4 col-md-auto mt-3">
                <nav>
                  <Link className="text-white" to="/">
                    Home
                  </Link>
                </nav>
              </div>
              <div className="col-6 col-sm-4 col-md-auto mt-3">
                <nav>
                  <Link className="text-white" to="/About">
                    About
                  </Link>
                </nav>
              </div>
              <div className="col-6 col-sm-4 col-md-auto mt-3">
                <nav>
                  <Link className="text-white" to="/Services">
                    Services
                  </Link>
                </nav>
              </div>
              <div className="col-6 col-sm-4 col-md-auto mt-3">
                <nav>
                  <Link className="text-white" to="/Contact">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="header"
        className="d-flex align-items-center"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    Grow your bussiness with
                    <strong className="brand-name"> HP tech</strong>
                  </h1>
                  <h2 className="my-3">
                    we are team of best developers making web and mobile app
                  </h2>
                  <div className="mt-3">
                    {/* <NavLink to={props.btname} className="btn-get-started">
                      {props.btname}
                    </NavLink> */}
                    <a href="#" className="btn-get-started">
                      {" "}
                      get started
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={n} className="img-fluid animated" alt="img home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
