import React from 'react'

const TableData = (props) => {
  // const object = props.info
  // console.log("TableDataJS typeof props.info", typeof (props.info))
  // console.log("TableDataJS props.info[0]", props.info[0])
  // if (props.info) {
  //   console.log("object[0] Object.values", Object.values(props.info[0]))
  //   console.log("object[0] Object.values typeof", typeof (Object.values(props.info[0])))
  // }

  // console.log("props.select category:", props.select)

  // create variable, then 
  // if props.select === all, show this, else if, 
  // const show = (props) => {
  //   // if (props.select === "All") {
  //   props.info && props.info.map((element, index) => {
  //     return (
  //       <tr key={index}>
  //         <td>{element.carpark}</td>
  //         <td>element.category</td>
  //         <td>element.weekdays_rate_1</td>
  //         <td>element.weekdays_rate_2</td>
  //         <td>element.saturday_rate</td>
  //         <td>element.sunday_publicholiday_rate</td>
  //       </tr>
  //     )
  //   })
  //   // } else {
  //   props.info && props.info.map((element, index) => {
  //     // if (element.category === props.select) {
  //     return (
  //       <tr key={index}>
  //         <td>{element.carpark}</td>
  //         <td>element.category</td>
  //         <td>element.weekdays_rate_1</td>
  //         <td>element.weekdays_rate_2</td>
  //         <td>element.saturday_rate</td>
  //         <td>element.sunday_publicholiday_rate</td>
  //       </tr>
  //     )
  //   })
  // }
  // }


  return (
    <React.Fragment>
      {/*}      {show}  */}

      {props.info && props.info.map((element, index) => {
        // console.log("element", element)
        // console.log("select is", props.select)
        if (props.select === "All") {
          // console.log("true", element.category, props.select)
          // console.log("element.category", element.category)
          // console.log("props.select", props.select)
          // console.log(123)
          return (
            <tr tr key={index} >
              <td>{element.carpark}</td>
              <td>{element.category}</td>
              <td>{element.weekdays_rate_1}</td>
              <td>{element.weekdays_rate_2}</td>
              <td>{element.saturday_rate}</td>
              <td>{element.sunday_publicholiday_rate}</td>
            </tr>
          )
        } else if (element.category === props.select) {
          // console.log(456)
          return (
            <tr tr key={index} >
              <td>{element.carpark}</td>
              <td>{element.category}</td>
              <td>{element.weekdays_rate_1}</td>
              <td>{element.weekdays_rate_2}</td>
              <td>{element.saturday_rate}</td>
              <td>{element.sunday_publicholiday_rate}</td>
            </tr >
          )
        }


      })}




      {/*
      {props.info && props.info.map((element, index) => {
        // console.log("element", element)
        // console.log("info", props.info)
        // if (element.category === props.select) {
        // console.log("true", element.category, props.select)
        // console.log("element.category", element.category)
        // console.log("props.select", props.select)
        return (
          <tr key={index}>
            <td>{element.carpark}</td>
            <td>{element.category}</td>
            <td>{element.weekdays_rate_1}</td>
            <td>{element.weekdays_rate_2}</td>
            <td>{element.saturday_rate}</td>
            <td>{element.sunday_publicholiday_rate}</td>
          </tr>
        )
        // }

        {/*        
          else {
            console.log("false", element.category, props.select)
            // console.log("element.category", element.category)
            // console.log("props.select", props.select)
            return (
              <tr key={index}>
                <td>{element.carpark}</td>
                <td>{element.category}</td>
                <td>{element.weekdays_rate_1}</td>
                <td>{element.weekdays_rate_2}</td>
                <td>{element.saturday_rate}</td>
                <td>{element.sunday_publicholiday_rate}</td>
              </tr>
            )
          }
          
        })}
      */}

    </React.Fragment >
  )
}

export default TableData

        // console.log("obj1L", object1.length)
        // console.log("obj1[0]L", Object.values(object1))

        // console.log("TableData object[0]", object[0])
        // console.log("obj1[0]", Object.values(object1[0])[0])

        // const object1 = props.info[0]
        // console.log(Object.values(object1))

        // for (i = 0; i < object1.length; i++) {
        //   for (j = 0; j < 7; j++) {
        //     Object.keys(object1[i])

        //     // console.log(Object.values)
        //   }
        // }

    // <td>{Object.values(object1[0][0])}</td>