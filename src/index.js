import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Growl, useGrowl } from "./lib/growl";

function App () {
  const [active, setActive] = useGrowl()
  const handleClick = () => {
    setActive({state: true, timer: 3000})
  }
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <a className="App-link" href="#" onClick={handleClick}>
					Clik here to activate the growl
        		</a>
      <Growl onDismissed={() => setActive({state: false, timer: 0})} active={active.state} message="Hello World!" />
    </div>
  )
};
ReactDOM.render(<App/>, document.getElementById("root"));
