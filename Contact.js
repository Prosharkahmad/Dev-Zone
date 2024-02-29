import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `my name is ${data.phone}.my mobile no is ${data.phone}. my email is ${data.email}. here is what i want to say${data.msg}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact us</h1>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Full name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      name="username"
                      value={data.fullname}
                      Onchange={InputEvent}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Phone no
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      name="number"
                      value={data.phone}
                      Onchange={InputEvent}
                      placeholder="Enter your phone no"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      name="email"
                      value={data.email}
                      Onchange={InputEvent}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      comments
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="message"
                      value={data.msg}
                      Onchange={InputEvent}
                    ></textarea>
                  </div>

                  <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
