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

  // domainlists.forEach(el => console.log(el.substring(0, el.length)));
  // domainlists.forEach(el => console.log(el));
  // console.log(domainlists);

  function handleEmailInput() {
    let reg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let userEmailDomain = email.substring(email.indexOf("@") + 1);

    // console.log(`Found the domain? : ${domainlists.includes(userEmailDomain)}`);

    return reg.test(email) && domainlists.includes(userEmailDomain);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(handleEmailInput());
    const message = await signup({ email, username, password });
    console.log(message);
    setAuthPopup("");
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
          // handleInput={handleInput(email)}
          handleChange={e => setEmail(e.target.value)}
          type="email"
        />
        {/* <Input
          required
          label="Username"
          value={username}
          handleChange={e => setUsername(e.target.value)}
          type="text"
        />
        <Input
          required
          label="Password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          type="password"
        /> */}
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
