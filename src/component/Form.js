import React from "react";

class Form extends React.Component {
  state = {
    errors: {
      lname: "",
      fname: "",
      email: "",
    },
    data: {
      lname: "",
      fname: "",
      email: "",
    },
    isSubmitOk: false,
  };

  login = async () => {
    const username = "courage";
    const password = "password";
    const data = { identifier: username, password };
    console.log('login body data: ',data);

    try {
      const result = await fetch(this.state.API_URL + '/auth/local', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json" 
          },
          body:JSON.stringify(data)
        });
      const response = await result.json();
      return response.jwt;
    }
    catch (err) {
      console.log(err);
      return null;
    };
  }

  callApi = async (httpMethod, accessToken, data) => {
    const hasData = data === undefined ? false : true;
    const config = {
      timeout: 3000,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    // console.log(config)
    const callUrl = this.state.API_URL + '/subscribers';
    console.log(callUrl);
    const response = await httpMethod(
      callUrl,
      hasData ? data : config,
      hasData ? config : undefined
    );
    return response;
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    const errors = this.state.errors;
    const data = this.state.data;

    switch (name) {
      case "mce_FNAME":
        errors.fname = value.length === 0 ? "First Name is not empty" : "";
        break;
      case "mce_LNAME":
        errors.lname = value.length === 0 ? "Last Name is not empty" : "";
        break;
      case "mce_EMAIL":
        errors.email = value.length < 5 ? "email is not empty" : "";
        this.setState({ data: { ...this.state.data, "email": value } });
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          errors.email = "please enter valid email";
        }
        break;
      default:
        break;
    }
    this.setState({ ...errors, [name]: value });
    data[name] = value;
    this.setState( { data } );
  };

  submitHandler = (e) => {
    e.preventDefault();
    document["mc-embedded-subscribe-form"].submit();

    // this.login().then(token => {
    //   console.log(token)
    //   this.callApi(axios.post, token, this.state.data).then(() => {
    //     alert("subscription added");
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // });

    // if (
    //   this.state.errors.name.length === 0 &&
    //   this.state.errors.phone.length === 0 &&
    //   this.state.errors.email.length === 0
    // ) {
    //   alert("form is valid");
    // } else {
    //   alert("form is invalid");
    // }

    // emailjs
    //   .sendForm(
    //     "gmail",
    //     "template_zo1q2mh",
    //     e.target,
    //     "user_vvQtVRIgqRETJC2JHOJz9"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       alert("form is valid");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert("form is invalid");
    //     }
    //   );
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.submitHandler.bind(this)} className="form_class"
         action="https://watch.us7.list-manage.com/subscribe/post?u=b44c9e936f2966a7a662c37ab&amp;id=0a04a3a8f1" 
         method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              id="mce_FNAME"
              name="FNAME"
              className="form-control"
              placeholder="First Name*"
              onChange={this.handleChange}
            />
            <p>{errors.name}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              id="mce_LNAME"
              name="LNAME"
              placeholder="Last Name*"
              onChange={this.handleChange}
            />
            <p>{errors.phone}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="EMAIL"
              className="form-control"
              id="mce_EMAIL"
              name="EMAIL"
              placeholder="Your Email*"
              onChange={this.handleChange}
            />
            <p>{errors.email}</p>
          </div>
        </div>
        <div className="hidden-field" aria-hidden="true">
          <input type="text" name="b_b44c9e936f2966a7a662c37ab_0a04a3a8f1" tabindex="-1" value="" />
        </div>
        <button type="submit" className="btn send_btn theme_btn">
          Send Message
        </button>
      </form>
    );
  }
}

export default Form;
