import React from 'react'

const TableHeader = (props) => {

  // console.log("TableHeader", props.info[0])
  // console.log("TableHeader", Object.keys(props.info[0]))

  return (
    <React.Fragment>
      <tr>
        <th className="col-sm-2">Carpark</th>
        <th className="col-sm-2">Category</th>
        <th className="col-sm-2">Weekdays Rate 1</th>
        <th className="col-sm-2">Weekdays Rate 2</th>
        <th className="col-sm-2">Saturday Rate</th>
        <th className="col-sm-2">Sunday and Public Holiday Rate</th>
      </tr>
    </React.Fragment>
  )
}

export default TableHeader

// {props.info[0].map((element, index) => {
//     return (
//       <th id={index} key={index}>{element}</th>
//     )
//   })}
