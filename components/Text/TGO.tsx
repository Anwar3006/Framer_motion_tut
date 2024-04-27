import React from "react";
import Paragraph from "./Paragraph";
import Word from "./Word";
import Character from "./Character";

const paragraph =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quibusdam, deserunt nostrum ut minima quaerat expedita quae quidem eligendi voluptate fuga necessitatibus similique fugit, distinctio beatae. Culpa corporis similique dolorum?";

const TextGradientOpacity = () => {
  return (
    <div>
      {/* <Paragraph text={paragraph} /> */}
      {/* <Word text={paragraph} /> */}
      <Character text={paragraph} />
    </div>
  );
};

export default TextGradientOpacity;
