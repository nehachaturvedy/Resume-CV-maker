import React, { Component } from "react";
import "./css/PageComponents.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.sendMail = this.sendMail.bind(this);
    this.onFilled = this.onFilled.bind(this);
    this.state = {
      subject: "",
      name: "",
      content: "",
    };
  }

  onFilled = (e) => {
    let x = this.state;
    if (e.target.name == "subject") {
      x.subject = e.target.value;
      this.setState({ ...x });
    } else if (e.target.name == "name") {
      x.name = e.target.value;
      this.setState({ ...x });
    } else {
      x.content = e.target.value;
      this.setState({ ...x });
    }
  };

  sendMail = () => {
    if (this.state.name && this.state.subject && this.state.content) {
      let subject = this.state.subject;
      let name = "Hello I'am " + this.state.name + ".\n I wanna say: ";
      let content = name + this.state.content;
      let myid = "nehachaturvedi990@gmail.com;";
      window.location =
        "mailto:" + myid + "?subject=" + subject + "&body=" + content;
    } else {
      if (this.state.name) {
        alert(
          "Hello " + this.state.name + ", Please fill the full Contact Form"
        );
      } else {
        alert("Kindly fill the full Contact Form Please!");
      }
    }
  };

  render() {
    return (
      <div className="my-5">
        <h1 className="underline text-center">Get in Touch</h1>
        <div
          className="container mt-4 p-3"
          style={{ backgroundColor: "#05ADB3" }}
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/855/589/original/contact-us-icons-with-handdrawn-doodle-line-illustration-vector.jpg"
                width="300"
              ></img>
            </div>
            <div className="col-12 col-md-6">
              <h2 className="text-uppercase mt-3 font-weight-bold text-white">
                CONTACT US
              </h2>

              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      value={this.state.name}
                      name="name"
                      type="text"
                      className="form-control mt-2"
                      placeholder="Enter Name"
                      required
                      onChange={this.onFilled}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      value={this.state.subject}
                      name="subject"
                      type="text"
                      className="form-control mt-2"
                      placeholder="Enter Subject"
                      required
                      onChange={this.onFilled}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      value={this.state.content}
                      name="content"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Enter Message"
                      rows="5"
                      required
                      onChange={this.onFilled}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-light" onClick={this.sendMail}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
