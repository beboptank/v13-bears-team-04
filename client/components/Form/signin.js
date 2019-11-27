import React from "react";

import Button from "../Button";
import Input from "./input";

export default function signin() {
  return (
    <div className="form__popup">
      <div className="form__content">
        <form action="#" className="form__popup__main">
          <div className="form__popup__left" />
          <div className="form__popup__right">
            <div className="form__wrapper">
              <div className="form__wrapper__icon">
                <img src="reddit_icon.png" alt="reddit_sub_icon" />
              </div>
              <div className="form__wrapper__title">Sign in</div>
              <Input>Username</Input>
              <Input>Password</Input>
              <Button>Sign In</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
