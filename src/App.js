import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Index from "./Pages/index.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx"
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar/>
      <Container>
        <Index />
      </Container>
    </div>
  );
}

export default App;
