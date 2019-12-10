import React from "react";
import clsx from "clsx";
import LinkButton from "./linkbutton";
import ButtonIcon from "./buttonicon";
import "./button.scss";

export default function Button({
  text,
  icon,
  color,
  inverted,
  size,
  href,
  handleClick,
  cx,
}) {
  const className = clsx(
    "btn",
    `btn--${color}${inverted ? "--inverted" : ""}`,
    `btn--${size}`,
    cx
  );

  // RETURNS A NEXT LINK
  if (href) {
    return (
      <LinkButton href={href} className={className}>
        {icon ? <ButtonIcon icon={icon} text={text} /> : text}
      </LinkButton>
    );
  }

  // RETURNS AN ACTUAL BUTTON
  return (
    <button type="button" className={className} onClick={handleClick}>
      {icon ? <ButtonIcon icon={icon} text={text} /> : text}
    </button>
  );
}

// DEFAULT PROPS
Button.defaultProps = {
  // String - (blue, orange)
  color: "blue",
  // Boolean
  inverted: false,
  // String - (tight, normal)
  size: "normal",
  // String - Font-Awesome Icon name - ex)plus
  // * remember to load your icons too * //
  icon: "",
  // String
  text: "Bueller?",
  // String - use if you're linking your another page
  href: "",
  // Function - use if you want to do something on click
  handleClick: () => console.log("Bueller? Bueller?"),
  // String - extra className
  cx: "",
};
