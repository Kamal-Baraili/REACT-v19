import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible((rev) => !rev)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hello World!</h1>}
    </div>
  );
}

export default App;
