import React, { useState, useEffect } from "react"
import Axios from "axios";
import {X_RAPIDAPI_KEY} from "./keys"

export default function GetData(props) {
  const [covidData, setCovidData] = useState([])

  useEffect(() => {
    getCovidStats();
  },[])

  async function getCovidStats() {
    // want to do our axios call/fetch
  //   fetch("https://covid-193.p.rapidapi.com/statistics", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "covid-193.p.rapidapi.com",
  //     "x-rapidapi-key": "26c8a07a57msha512146016c538ap16500ajsn975f2f1f8559"
  //   }
  // })
  // .then(response => {
  //   console.log(response);
  //   response.json().then(data => {
  //     console.log(data)
  //   })
  // })
  // .catch(err => {
  //   console.log(err);
  // });
    
    const res = await Axios.get("https://covid-193.p.rapidapi.com/statistics", {
      "headers": {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": X_RAPIDAPI_KEY,
    },
    })
    setCovidData(res.data.response)
  }
  
  return (
    <div>
      <h1>Data here:</h1>
      {covidData.length}
    </div>
  )

}