import { useState } from "react";

export default function App({
  color1 = "blue",
  para1 = "type your text",
  firstpara = "i love nature",
  background = "white",
  mystar = "the stars",
}) {
  const [first, setFirst] = useState(false);
  function handlefirst() {
    setFirst((ft) => !ft);
  }
  return (
    <div>
      <TextExpander first={first}>
        <FirstText
          first={first}
          handlefirst={handlefirst}
          color1={color1}
          para1={para1}
          firstpara={firstpara}
          background={background}
          mystar={mystar}
        />
      </TextExpander>
    </div>
  );
}

function TextExpander({ children }) {
  return <div className="text">{children} </div>;
}

function FirstText({
  first,
  handlefirst,
  color1,
  para1,
  firstpara,
  background,
  mystar,
}) {
  const color = {
    color: color1,
  };
  const bg = { backgroundColor: background };
  return (
    <p style={bg}>
      {firstpara}
      <span style={color} className="thepast" onClick={handlefirst}>
        {" "}
        {mystar}
      </span>
      {first && <span>{para1} </span>}
    </p>
  );
}
