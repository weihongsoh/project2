import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Table from "./components/Table";

function App() {
  const [input, setInput] = useState("")
  // const [filter, setFilter] = useState("")
  const [info, setInfo] = useState("")

  const handleChange = (value) => {
    // console.log(value, "from app")
    setInput(value)
    // console.log(input)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // setFilter(input)
  }

  const checkRate = async () => {
    // const url = "https://data.gov.sg/api/action/datastore_search?resource_id=85207289-6ae7-4a56-9066-e6090a3684a5"
    const url = "https://data.gov.sg/api/action/datastore_search?resource_id=85207289-6ae7-4a56-9066-e6090a3684a5&limit=5"

    try {
      const res = await fetch(url);
      const data = await res.json();
      const parking = data.result.records

      console.log("parking", parking)
      setInfo(parking)
      // console.log("setInfo", setInfo)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkRate()
  }, [])


  return (
    <div>
      <h2>Carpark Rates (for major shopping malls, attractions and hotels)</h2>

      <Input placeholder="Search carpark" type="text" handleChange={handleChange} />

      <Button type="submit" value="Search carpark" handleSubmit={handleSubmit} />

      {console.log("AppJS infoState", info)}
      <Table info={info} input={input} />
      {/* {JSON.stringify(info)}  */}
    </div>
  );
}

export default App;



  // Error: Objects are not valid as a React child (found: object with keys {category, saturday_rate, sunday_publicholiday_rate, carpark, weekdays_rate_1, weekdays_rate_2, _id}). If you meant to render a collection of children, use an array instead.
  // https://data.gov.sg/api/action/datastore_search?resource_id=85207289-6ae7-4a56-9066-e6090a3684a5&limit=5


  // const parking = []
  // parking.push(info.map((element, index) => {
  //   return (
  //     element.carpark
  //   )
  // }))

  // const carpark = []
  // for (let i = 0; i < data.result.records.length; i++) {
    //   carpark.push({
      //     "carpark": data.result.records[i].carpark,
      //     "category": data.result.records[i].category,
      //     "weekdays_rate_1": data.result.records[i].weekdays_rate_1,
      //     "weekdays_rate_2": data.result.records[i].weekdays_rate_2,
      //     "saturday_rate": data.result.records[i].saturday_rate,
            //     "sunday_publicholiday_rate": data.result.records[i].sunday_publicholiday_rate,
            //     "id": data.result.records[i]._id,

            //   }
            //   )
            // }

            // const checkRate = async () => {
              //   const url = "https://data.gov.sg/api/action/datastore_search?resource_id=85207289-6ae7-4a56-9066-e6090a3684a5&limit=5"

              //   try {
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     console.log(data)
        //     setInfo(data)
        //     // setInfo(data.result)
        //     // console.log("info", info)
        //   } catch (err) {
        //     console.log(err)
        //   }
        // }

        // // console.log("Result", result)

