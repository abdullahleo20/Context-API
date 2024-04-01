import React from "react";
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import ThemeContextProvider from "./components/contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <div className="ui very padded text container segment">
      <ThemeContextProvider>
        <Navbar/>
        <ToDoList/>
      </ThemeContextProvider>   
      </div>
    </div>
  );
}

export default App;
