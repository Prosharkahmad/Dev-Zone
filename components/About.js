import React from "react";
import Home from "./Home";
import n from "./n.jpg";
const About = () => {
  return (
    <>
      <div className="fidex-top">
        <Home />
      </div>
      <section
        id="header"
        className="d-flex align-items-center "
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    <strong className="brand-name"> About us </strong>
                  </h1>
                  <h2 className="m3">
                    we are team of best developers making web and mobile app
                  </h2>
                  <div className="mt-3">
                    {/* <NavLink to={props.btname} className="btn-get-started">
                      {props.btname}
                    </NavLink> */}
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
};
export default About;
