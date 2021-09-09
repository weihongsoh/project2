import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

const App = () => {
  const [input, setInput] = useState("")
  const [select, setSelect] = useState("All")
  const [info, setInfo] = useState("")
  const [toggle, setToggle] = useState(true)

  const currentDate = new Date()
  const DT = currentDate.toString()
  // console.log("DT", typeof (DT))
  // console.log("DT", DT)
  const [manualDate, setManualDate] = useState(currentDate)
  const [date, setDate] = useState(manualDate.toDateString())
  const [time, setTime] = useState(manualDate.toLocaleTimeString())
  const [day, setDay] = useState(currentDate.getDay())
  const [hour, setHour] = useState(currentDate.getHours())
  // const [dayOfWeek, setDayOfWeek] = useState(initialState)
  // for select button
  const [dayRate, setDayRate] = useState("")
  // console.log("CD", currentDate)
  // console.log("DC", manualDate)
  let ck = manualDate.toDateString()
  // console.log("ck", ck)

  // console.log("day", day)
  // console.log(new Date('December 17, 1995 03:24:00'))
  // if ()

  // console.log(dayRate)
  // console.log("date", date)
  // console.log("time", time)
  // console.log("time", hour)


  const handleChange = (value) => {
    setInput(value)

    let typing = document.querySelector("#myInput")
    let filter = typing.value.toUpperCase()
    // let filter = input.toUpperCase()
    let table = document.querySelector("#myTable")
    let trr = table.querySelectorAll("tr")
    let td = ""
    let txtValue = ""

    // loop1
    for (let i = 0; i < trr.length; i++) {
      td = trr[i].querySelectorAll("td")[0]
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          trr[i].style.display = ""
        } else {
          trr[i].style.display = "none"
        }
      }
    } // end of loop1

    // loop2
    for (let i = 1; i < trr.length; i++) {
      // if (day === 1 || 2 || 3 || 4 || 5) {
      // if (date === (1 || 2 || 3 || 4 || 5)) {
      // if (date === 1) {
      // console.log("DR", dayRate)
      if (dayRate === 2) {
        for (let j = 2; j <= 5; j++) {
          trr[i].querySelectorAll("td")[j].style.background = ""
        }
        trr[i].querySelectorAll("td")[dayRate].style.background = "yellow"
        // console.log("td", day)
        // console.log(tr.length)
        // console.log("weekDay", date)
        // tr[i].querySelectorAll("td")[2].style.background = "yellow"
        // tr[i].querySelectorAll("td")[3].style.background = ""
        // tr[i].querySelectorAll("td")[4].style.background = ""
        // tr[i].querySelectorAll("td")[5].style.background = ""
        // td.style.background = "yellow"
        // td2.style.background = "yellow"
        // } else if (date === 6) {
      } else if (dayRate === 3) {
        for (let j = 2; j <= 5; j++) {
          trr[i].querySelectorAll("td")[j].style.background = ""
        }
        trr[i].querySelectorAll("td")[dayRate].style.background = "yellow"
        // console.log("satDay", date)
        // console.log("td", td)
        // tr[i].querySelectorAll("td")[2].style.background = ""
        // tr[i].querySelectorAll("td")[3].style.background = "yellow"
        // tr[i].querySelectorAll("td")[4].style.background = ""
        // tr[i].querySelectorAll("td")[5].style.background = ""
        // td3.style.background = "yellow"
        // } else if (date === 0) {
      } else if (dayRate === 4) {
        for (let j = 2; j <= 5; j++) {
          trr[i].querySelectorAll("td")[j].style.background = ""
        }
        trr[i].querySelectorAll("td")[dayRate].style.background = "yellow"
        // console.log("satDay", date)
        // console.log("td", td)
        // tr[i].querySelectorAll("td")[2].style.background = ""
        // tr[i].querySelectorAll("td")[3].style.background = ""
        // tr[i].querySelectorAll("td")[4].style.background = "yellow"
        // tr[i].querySelectorAll("td")[5].style.background = ""
        // td3.style.background = "yellow"
        // } else if (date === 0) {
      } else if (dayRate === 5) {
        for (let j = 2; j <= 5; j++) {
          trr[i].querySelectorAll("td")[j].style.background = ""
        }
        trr[i].querySelectorAll("td")[dayRate].style.background = "yellow"
        // console.log("sunDay", date)
        // console.log("td", td)
        // tr[i].querySelectorAll("td")[2].style.background = ""
        // tr[i].querySelectorAll("td")[3].style.background = ""
        // tr[i].querySelectorAll("td")[4].style.background = ""
        // tr[i].querySelectorAll("td")[5].style.background = "yellow"
        // td4.style.background = "yellow"
      } else {
        console.log("no such date")
      }
    } // end of for loop2

    // // loop3
    // for (let i = 1; i < tr.length; i++) {
    //   if (info[i - 1]?.weekdays_rate_1.includes("Daily")) {
    //     for (let j = 2; j <= 5; j++) {
    //       tr[i].querySelectorAll("td")[j].style.background = ""
    //     }
    //     tr[i].querySelectorAll("td")[2].style.background = "yellow"
    //   } else if (info[i - 1]?.weekdays_rate_1.includes("Mon-Fri")) {
    //     for (let j = 2; j <= 5; j++) {
    //       tr[i].querySelectorAll("td")[j].style.background = ""
    //     }
    //     tr[i].querySelectorAll("td")[2].style.background = "yellow"
    //   } else if (((parseInt(info[i - 1]?.weekdays_rate_1.substring(0, info[i - 1]?.weekdays_rate_1.indexOf("-")).replace(/\D/g, "")) <= 10) && ((parseInt(info[i - 1]?.weekdays_rate_1.substring(info[i - 1]?.weekdays_rate_1.indexOf("-"), info[i - 1]?.weekdays_rate_1.indexOf(":")).replace(/\D/g, "")) + 12) >= 10))) {
    //     for (let j = 2; j <= 5; j++) {
    //       tr[i].querySelectorAll("td")[j].style.background = ""
    //     }
    //     tr[i].querySelectorAll("td")[2].style.background = "yellow"
    //   }

    // } // end of loop3

    // // // loop4
    // for (let i = 1; i < tr.length; i++) {

    //   const timeLeft = ((((info[17]?.weekdays_rate_1.substring(0, info[17]?.weekdays_rate_1.indexOf("-"))) === "12am") ? 0 : parseInt(info[17]?.weekdays_rate_1.substring(0, info[17]?.weekdays_rate_1.indexOf("-")).replace(/\D/g, ""))) <= hour)
    //   const timeRight = ((parseInt(info[i - 1]?.weekdays_rate_1.substring(info[i - 1]?.weekdays_rate_1.indexOf("-"), info[i - 1]?.weekdays_rate_1.indexOf(":")).replace(/\D/g, "")) + 12) >= hour)

    //   for (let j = 2; j <= 5; j++) {
    //     if (dayRate === j) {
    //       tr[i].querySelectorAll("td")[j].style.background = "yellow"
    //       //   if() {
    //       //   }
    //       // }
    //       // console.log(tr[1].querySelectorAll("td")[j])
    //     }


    //     // if (dayRate === j) {
    //     //   if (info[i - 1]?.weekdays_rate_1.includes("Daily")) {
    //     //     tr[i].querySelectorAll("td")[j].style.background = "yellow"
    //     //   } else if (info[i - 1]?.weekdays_rate_1.includes("Mon" || "Tue" || "Wed" || "Thu" || "Fri")) {
    //     //     tr[i].querySelectorAll("td")[j].style.background = "yellow"
    //     //   } else if ((timeLeft && timeRight)) {
    //     //     tr[i].querySelectorAll("td")[j].style.background = "yellow"
    //     //   } else {
    //     //     tr[i].querySelectorAll("td")[j].style.background = ""
    //     //   }
    //     // }

    //   }



    // } // end of loop4


    // console.log(tr[1].querySelectorAll("td"))
    // console.log(dayRate)



    // setToggle(toggle ? false : true)
  } // end of handleChange


  // console.log(info[4]?.weekdays_rate_1.includes("-"))
  // console.log(info[4]?.weekdays_rate_1.indexOf("-"))
  // console.log(info[4]?.weekdays_rate_1.indexOf(":"))
  // console.log(info[4]?.weekdays_rate_1.indexOf("-"))
  // console.log(parseInt(info[4]?.weekdays_rate_1.substring(0, info[4]?.weekdays_rate_1.indexOf("-")).replace(/\D/g, ""))) // check am
  // console.log(parseInt(info[4]?.weekdays_rate_1.substring(info[4]?.weekdays_rate_1.indexOf("-"), info[4]?.weekdays_rate_1.indexOf(":")).replace(/\D/g, "")) + 12) // check pm
  // console.log(((parseInt(info[4]?.weekdays_rate_1.substring(0, info[4]?.weekdays_rate_1.indexOf("-")).replace(/\D/g, "")) <= 10) && ((parseInt(info[4]?.weekdays_rate_1.substring(info[4]?.weekdays_rate_1.indexOf("-"), info[4]?.weekdays_rate_1.indexOf(":")).replace(/\D/g, "")) + 12) >= 10)) ? 1 : 0)
  // console.log(parseInt(info[17]?.weekdays_rate_1.substring(0, info[17]?.weekdays_rate_1.indexOf("-")).replace(/\D/g, "")))


  // console.log(parseInt(info[17]?.weekdays_rate_1.substring(0, info[17]?.weekdays_rate_1.indexOf("-")).replace(/\D/g, "")))

  // time check above

  const handleSelect = (value) => {
    // setToggle(toggle ? false : true)
    setSelect(value)
  } // end of handleSelect

  const handleSubmit = (value) => {
    value = parseInt(value)

    // reverse if not enough time
    if (value === 2) {
      setHour(10)
    } else if (value === 3) {
      setHour(19)
    } else if (value === 4) {
      setManualDate(new Date('September 11, 2021 09:00:00'))
    } else if (value === 5) {
      setManualDate(new Date('September 12, 2021 14:00:00'))
    } else if (value === 6) {
      setManualDate(new Date('December 25, 2021 09:00:00'))
    }
    // console.log("manualDate", manualDate)
    // console.log("manualDate", typeof (manualDate))

    setDayRate(value)
    // setToggle(toggle ? false : true)
  } // end of handleSubmit

  const checkRate = async () => {
    // const url = "https://data.gov.sg/api/action/datastore_search?resource_id=85207289-6ae7-4a56-9066-e6090a3684a5&limit=357"
    const url = "https://data.gov.sg/api/action/datastore_search?resource_id=85207289-6ae7-4a56-9066-e6090a3684a5&limit=357"

    try {
      const res = await fetch(url);
      const data = await res.json();
      const parking = data.result.records
      setInfo(parking)
    } catch (err) {
      console.log(err)
    }
    // setToggle(toggle ? false : true)
  } // end of checkRate

  useEffect(() => {
    checkRate();
    setToggle(toggle ? false : true)
  }, [])

  return (
    <div>
      <h2>Carpark Rates (for major shopping malls, attractions and hotels)</h2>

      <Form handleChange={handleChange} handleSelect={handleSelect} handleSubmit={handleSubmit} />


      <Table info={info} select={select} />
      {/* {JSON.stringify(info)}  */}
    </div>
  );
}

export default App;

{/*
<div date={date}>Date: {date}</div>
<div time={time}>Time: {time}</div>
*/}
