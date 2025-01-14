import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="my-8 mx-20 bg-bgrnd">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
