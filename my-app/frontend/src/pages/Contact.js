import classes from "./Contact.module.css";
import React, { useState } from "react";
// import { Mailer } from "nodemailer-react";

const ContactPage = () => {
  // return (
  //   <>
  //     <h1>Conctact page</h1>
  //     <h3>Work with me!</h3>
  //     <div className={classes.container}>
  //       <form /*onSubmit={main}*/>
  //         <input
  //           type="text"
  //           name="name"
  //           value={formState.name}
  //           placeholder="Your Name"
  //           onChange={changeHandler}
  //         />
  //         <input
  //           type="email"
  //           name="email"
  //           value={formState.email}
  //           placeholder="Your Email"
  //           onChange={changeHandler}
  //         />
  //         <input
  //           type="text"
  //           name="phone"
  //           value={formState.phone}
  //           placeholder="Your Phone Number"
  //           onChange={changeHandler}
  //         />
  //         <textarea
  //           name="message"
  //           type="text"
  //           value={formState.message}
  //           rows="10"
  //           placeholder="Write your message"
  //           onChange={changeHandler}
  //         ></textarea>
  //         <input type="submit" value="Send" />
  //       </form>
  //     </div>
  //   </>
  // );
  return (
    <div className="App">
      <form>
        <input
          type="text"

          // onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Send Email</button>
      </form>

      {/* <button onClick={nodeMailerHandler}>Click</button> */}
    </div>
  );
};

export default ContactPage;
