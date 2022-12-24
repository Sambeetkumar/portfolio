import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
  return (
    <AnimatedCursor
      className="cursor"
      innerSize={10}
      outerSize={35}
      color="235, 69, 95"
      outerAlpha={0.2}
      innerScale={0.8}
      outerScale={1.5}
          outerStyle={{
              border: "1px solid #fff",
          }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default AnimCursor;
