import React,{useState} from "react";

import Page from "./Views/Page.jsx";
import Theme from "./Components/Theme";


function App() {

  const [theme, setTheme] = useState(true); // true => light them | false => dark theme

  return (
    <Theme theme={theme} >
    <Page theme={theme} setTheme={setTheme} />
    </Theme>
  );
}

export default App;
