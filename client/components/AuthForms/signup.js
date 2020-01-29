import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormLink from "./authformlink";
import { useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";

import { domainlists } from "./domainlists";

export default function SignUp() {
  const { setAuthPopup } = useAuthPopup();
  const { signup } = useUser();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // domainlists.forEach(el => console.log(el.substring(0, el.length)));
  // domainlists.forEach(el => console.log(el));
  // console.log(domainlists);

  // console.log("" === false);

  function handleEmailInput(e) {
    e.preventDefault();
    // Check whether the user input matches the email format: "aaa@{existing-domain-name}"
    let reg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let userEmailDomain = email.substring(email.indexOf("@") + 1);

    // console.log(`Found the domain? : ${domainlists.includes(userEmailDomain)}`);

    return reg.test(email) && domainlists.includes(userEmailDomain);
  }

  function handlePasswordInput(e) {
    //Passwords must contain at least six characters, including uppercase, lowercase letters and numbers.
    e.preventDefault();

    /*
      Contain at least 6 characters
      Contain at least 1 number
      Contain at least 1 lowercase character (a-z)
      Contain at least 1 uppercase character (A-Z)
      Contains only 0-9a-zA-Z
    */
    let reg = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/);

    return reg.test(password);
  }

  function handleUserNameInput(e) {
    e.preventDefault();
    //contains number of letters between 3 and 20 nonwhitespace characters

    let reg = new RegExp(/^\s*(?:\S\s*){3,20}$/);

    return reg.test(username);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(`Email is valid: ${handleEmailInput()}`);
    // console.log(`Password is valid: ${handlePasswordInput()}`);
    // console.log(`Username is valid: ${handleUserNameInput()}`);

    if (!handleEmailInput(e)) {
      setEmailError(
        "Please enter your email with existing domain name in format: whatever@example.com"
      );
    } else {
      setEmailError("");
    }

    if (!handleUserNameInput(e)) {
      setUsernameError("Username must be between 3 and 20 characters");
    } else {
      setUsernameError("");
    }

    if (!handlePasswordInput(e)) {
      setPasswordError(
        "Passwords must contain at least six characters, including uppercase, lowercase letters and numbers."
      );
    } else {
      setPasswordError("");
    }
    console.log(emailError, usernameError, passwordError);

    if (
      handlePasswordInput(e) &&
      handleUserNameInput(e) &&
      handlePasswordInput(e)
    ) {
      const message = await signup({ email, username, password });
      console.log(message);

      setAuthPopup("");
    }
  }

  return (
    <div className="form__wrapper">
      <h2>
        By having a Reddit account, you can join, vote, and comment on all your
        favorite Reddit content.
      </h2>

      <form action="#" onSubmit={handleSubmit}>
        <Input
          required
          label="Email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
          errorMessage={emailError}
          type="email"
        />
        <Input
          required
          label="Username"
          value={username}
          handleChange={e => setUsername(e.target.value)}
          errorMessage={usernameError}
          type="text"
        />
        <Input
          required
          label="Password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          errorMessage={passwordError}
          type="password"
        />
        <Button
          type="submit"
          text="Sign Up"
          handleClick={() => console.log("processing...")}
          cx="form__wrapper__button"
        />
      </form>

      <div className="form__wrapper__links">
        <p>
          Already a Redditor?{" "}
          <AuthFormLink
            handleClick={() => setAuthPopup("signin")}
            text=" Log in"
            cx="form__wrapper__link"
          />
        </p>
      </div>

      <div className="form__wrapper__info">
        <p>
          By clicking next, you agree to our <span>Terms</span> and that you
          have read our <span>Privacy Policy</span> and{" "}
          <span>Content Policy</span>.
        </p>
      </div>
    </div>
  );
}
