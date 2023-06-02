import React from "react";
import Header from "./Header";
import Main from "./MainScreen";
import Image from "./Image"
import "../css/style"

export default function App() {
  return (
    <div className="container">
      <Header name="coding in a nutshell" />
      <Main text="text"/>
      <Image/>
    </div>
  );
}
