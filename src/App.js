import React from "react";
import Form from "../src/components/form";
import "./App.css";

export const userContext = React.createContext();
function App() {
  return (
    <div className="App">
      <userContext.Provider
        value={{
          string: "Learning Context",
          grow: "no grow",
        }}
      >
        <Form />
      </userContext.Provider>
    </div>
  );
}

export default App;
