import React from "react";

const NumberPropSm = (props) => {
  return (
    <div>
        <h4
          style={{
            backgroundColor: "#f25f3a",
            textAlign:"left",
            borderRadius: "10px",
            paddingLeft:"5px",
            color: "black  ",
            marginTop: "4px",
          }}
        >
          {props.number} {props.title}
        </h4>
        <p
          style={{
            marginLeft: "10px",
            marginTop: "20px",
            marginBotton: "20px",
            color: "#C3AEB1",
          }}
        >
          {props.description}
        </p>
    </div>
  );
};

export default NumberPropSm;
