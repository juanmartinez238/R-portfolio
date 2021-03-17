// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="contact-area contact-area-2 contact-area-3">
                                <h2>Quick Contact Form</h2>
                                <div className="contact-form">
                                    <form method="post" onSubmit={this.submitForm}  action="https://formspree.io/f/mleoqwdb" className="contact-validation-active" id="contact-form">
                                        <div className="half-col">
                                            <input style={{color: '#fff'}} type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="half-col">
                                            <input style={{color: '#fff'}} type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                        <div className="half-col">
                                            <input style={{color: '#fff'}} type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone"/>
                                        </div>
                                        <div className="half-col">
                                            <input style={{color: '#fff'}} type="text" name="address" id="address" className="form-control" placeholder="Address"/>
                                        </div>
                                        <div>
                                            <textarea style={{color: '#fff'}} className="form-control" name="note"  id="note" placeholder="Your Massage..."></textarea>
                                        </div>
                                        <div className="submit-btn-wrapper">
                                        {status === "SUCCESS" ? <p>Thanks!</p> :<button type="submit" className="theme-btn-s3">Submit</button>}
                                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                                            <div id="loader">
                                                <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                            </div>
                                        </div>
                                        <div className="clearfix error-handling-messages">
                                            <div id="success">Thank you</div>
                                            <div id="error"> Error occurred while sending email. Please try again later. </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}