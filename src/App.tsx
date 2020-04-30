import React from "react";
import "./App.css";
import { AsyncScheduler, AsapScheduler, QueueScheduler } from "./examples";

const App = () => {
  return (
    <>
      <AsyncScheduler />
      <AsapScheduler />
      <QueueScheduler />
    </>
  );
};

export default App;
