import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../App.css";

const backendHostUrl = `${process.env.REACT_APP_FIREBASE_FUNCTIONS_HOST}/geeks-firebase-72e6d/us-central1`;
//const backendHostUrl = `https://www.eventbriteapi.com/v3/users/me/?token=UZ2OAYX2ZOAUB7U34BTD`;
// const backendHostUrl ="https://lugras-fluffy-space-computing-machine-vw5pw6v769qhw64g-3000.preview.app.github.dev";

export default function Explore() {
   const [temp, setTemp] = useState(0);
  // const [lowtemp, setLowTemp] = useState(0);
  // const [conditionicon, setConditionIcon] = useState("");
  // const [condition, setCondition] = useState("");
  // const [location, setLocation] = useState("");
  // const [region, setRegion] = useState("");
  // const [maxtemp, setMaxTemp] = useState("");
  // const [mintemp, setMinTemp] = useState("");
  // const [epotch, setEpotch] = useState("");
  // const [epotch1h, setEpotch1H] = useState("");
  // const [epotch2h, setEpotch2H] = useState("");
  // const [hour0, setHour0] = useState("");
  // const [currenttime, setCurrentTime] = useState("");

  // const [hours, setHours] = useState([]);

  // // const username  =useState(username,useState );

  // const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${backendHostUrl}/getActivities`
      );

      const data = await res.json();

      console.log(data);

      // console.log("The res: ", data);
      //  setTemp(data.data.current.temp_f);
      // setLowTemp();
      // setConditionIcon("https:" + data.data.current.condition.icon);
      // setCondition(data.data.current.condition.text);
      // setLocation(data.data.location.name);
      // setRegion(data.data.location.region);
      // setMaxTemp(data.data.forecast.forecastday[0].day.maxtemp_f);
      // setMinTemp(data.data.forecast.forecastday[0].day.mintemp_f);
      // setEpotch(data.data.current.condition.last_updated_epoch);
      // setHour0(data.data.forecast.forecastday[0].hour[0]);

      // setHours(data.data.forecast.forecastday[0].hour);
    })();
  }, []);

  return (
    <div className="form-group row">
      <div className="row">
        <label htmlFor="place">Where to go:</label>
        <input id="place" />
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="initialdate">start Date</label>
          <input id="initialdate" />
        </div>
        <div className="col">
          <label htmlFor="endate">End Date</label>
          <input id="endate" />
        </div>
      </div>
      <div className="row">
        <label htmlFor="activity">Activity</label>
        <input id="activity" />
      </div>
      <div className="row">
        <button className="btn-primary " width="50px">
          Button
        </button>

        <button className="btn-primary">Button</button>
      </div>
    </div>
  );
}