import React from 'react'

const TableHeader = (props) => {

  // console.log("TableHeader", props.info[0])
  // console.log("TableHeader", Object.keys(props.info[0]))

  return (
    <thead>
      <tr>
        <th>Carpark</th>
        <th>Category</th>
        <th>Weekdays Rate 1</th>
        <th>Weekdays Rate 2</th>
        <th>Saturday Rate</th>
        <th>Sunday and Public Holiday Rate</th>
      </tr>
    </thead>
  )
}

export default TableHeader

// {props.info[0].map((element, index) => {
//     return (
//       <th id={index} key={index}>{element}</th>
//     )
//   })}
