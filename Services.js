import React from "react";
import Home from "./Home";
import yaho from "./yaho.png";
import ali from "./ali.png";
import amazon from "./amazon.jpg";
import fiverr from "./fiverr.png";
import micro from "./micro.png";
import upwork from "./upwork.png";
export default function Services() {
  return (
    <>
      <div className="fidex-top">
        <Home />
      </div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div
        className="container-fluid nav_bg"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src={yaho} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Yahoo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://www.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAHieOmhn4-o8pDaOdQbVeRgjid1ciZaBXroi0sBAj41RHHk0ODbrHT4Uul9KPm4_LhZCSAZsgqLJnxIUL2_O0Ali8HJxmxrUJLvrP6m5S5E_GFbN9Kd66f0jG0j45FLlyuLyu6q7WjqQ7aswkdW05p6sdr4T0Hrow575F0xT7H-j"
                      className="btn btn-primary"
                    >
                      Click
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={micro} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Microsoft</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://www.alibaba.com/"
                      className="btn btn-primary"
                    >
                      Click
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={ali} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Alibaba</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://www.microsoft.com/en-pk"
                      className="btn btn-primary"
                    >
                      Click
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img src={amazon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Amazon</h5>
                    <p className="card-text">
                      Amazon is the world wide market and ecommerece store to
                      buy and sell products
                    </p>
                    <a
                      href="https://www.amazon.com/"
                      className="btn btn-primary"
                    >
                      Click
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img src={upwork} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Upword</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://www.upwork.com/"
                      className="btn btn-primary"
                    >
                      Click
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img src={fiverr} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Fiverr</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://www.fiverr.com/"
                      className="btn btn-primary"
                    >
                      Click
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
