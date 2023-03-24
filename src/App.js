import "./App.css";
import React, { useState, useEffect } from "react";
import Weather from "./Weather";

export default function App() {
   return (
      <div className="App">
         <Weather defaultCity="Chennai" />
      </div>
   );
}
