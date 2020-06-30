import React, { useState } from "react";
import Clock from "./components/Clock";
import TimeZone from "./components/TimeZone.js";
import "./styles.css";

export default function App() {
  const [timezone, setTimezone] = useState([
    {
      value: "0.0",
      label: '(GMT+00:00) London": "Europe/London"',
      location: "Europe/London"
    }
  ]);

  const handleTimeZone = e => {
    setTimezone([...timezone, e]);
  };

  const handleClick = zone => {
    const index = timezone.findIndex(x => x.label === zone.label);
    const copyArray = [...timezone];
    copyArray.splice(index, 1);
    setTimezone(copyArray);
  };

  return (
    <div className="App">
      <TimeZone handleTimeZone={handleTimeZone} />
      <Clock timezone={timezone} handleClick={handleClick} />
    </div>
  );
}
