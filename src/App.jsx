import { useState } from "react";
import Form from "./components/Form";
import SubmitStatus from "./components/SubmitStatus";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Matthieu Pierce's Frontend Take-Home Exercise</h1>
      <Form />
      <SubmitStatus />
    </div>
  );
}

export default App;
