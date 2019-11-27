import React, { useState } from "react";

export default function input(props) {
  const [placeholder, setPlaceholder] = useState(
    [{ userName: "username" }, { email: "email" }, { password: "password" }],
    []
  );

  return (
    <div>
      <input
        className="form__input"
        type="text"
        placeholder="username"
        id="username"
      />
    </div>
  );
}
