import React from "react";

import Page from "./Views/Page.jsx";
import Theme from "./Components/Theme";


function App() {
  return (
    <Theme dark={true} >
    <Page/>
    </Theme>
  );
}

export default App;
