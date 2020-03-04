import React, { Component } from "react";
import ContactStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InputValidationField from "../../components/InputValidationField";
import TextareaValidationField from "../../components/TextareaValidationField";
import Button from "../../components/Button";
import { Formik } from "formik";
import axios from "axios";
// import ContactSchema from "./validation";

class ContactPage extends Component {
  render() {
    return (
      <>
        <Header />
        <ContactStyle>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: ""
            }}
            // validationSchema={this.state.validate ? ContactSchema : null}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("values", values);
              try {
                let data = {
                  from: "antonije25.01.1994@gmail.com",
                  to: "antonije25.01.1994@gmail.com",
                  subject: "Subject TEST",
                  message: "TEST MESSAGTE"
                };

                await axios.post(`http://localhost:4050/mail-contact/test`, {
                  // mailerTo: this.state.message.email,
                  mailerTo: "ogistdipen@outlook.com",
                  mailerSubject: "subjectTesting",
                  mailerText: "TEXT TESDTING"
                });

                values.firstName = "";
                values.lastName = "";
                values.email = "";
                values.message = "";
              } catch (err) {
                console.log("error", err);
              }
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              validateForm,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <h1> Contact us </h1>
                  <div className="row">
                    <div className="inputField">
                      <InputValidationField
                        label="First Name"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        errors={errors.firstName}
                        touched={touched.firstName}
                      />
                    </div>
                    <div className="inputField">
                      <InputValidationField
                        label="Last Name"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        errors={errors.lastName}
                        touched={touched.lastName}
                      />
                    </div>
                  </div>
                  <InputValidationField
                    label="Email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errors={errors.email}
                    touched={touched.email}
                  />
                  <TextareaValidationField
                    label="Message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    errors={errors.message}
                    touched={touched.message}
                  />
                  <div className="submitBtn">
                    <Button
                      type={"submit"}
                      onClick={() => {
                        validateForm().then(() =>
                          this.setState({ validate: true })
                        );

                        setTimeout(() => {
                          this.setState({ validate: false });
                        }, 500);
                      }}
                      btnText={"Submit"}
                      bgColor={"#0065BA"}
                      txtColor={"#fff"}
                      fWeight={"500"}
                      width={"300px"}
                      margin={"50px 10px 15px 10px"}
                      letterSpacing={"1px"}
                      padding={"20px 20px"}
                      bRadius={"50px"}
                      hoverBg={"#fff"}
                      hoverBorder={"1px solid #0065BA"}
                      hoverTxt={"#0065BA"}
                      transition={"all 0.3s"}
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              </>
            )}
          </Formik>
          <div className="contactInfo"></div>
        </ContactStyle>
        <Footer />
      </>
    );
  }
}
export default ContactPage;
