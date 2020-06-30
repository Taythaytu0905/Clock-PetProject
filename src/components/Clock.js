import moment from "moment";
import React from "react";
import AnalogClock, { Themes } from "react-analog-clock";

require("moment-timezone");

export default function Clock(props) {
  const { timezone, handleClick } = props;

  return (
    <div className="Clock container">
      {timezone.map(zone => (
        <>
          <div className="item">
            <div className="clock">
              <AnalogClock theme={Themes.dark} gmtOffset={zone.value} />
            </div>
            <div className="info">
              <label className="label-location">
                {moment()
                  .tz(zone.location)
                  .format("YYYY-MM-DD")}
              </label>{" "}
              <br />
              <label className="label-zone">{zone.label}</label> <br />
              <button className="button" onClick={() => handleClick(zone)}>
                Delete
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
