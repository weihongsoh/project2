import React from 'react'
import TableHeader from './TableHeader'
import TableData from './TableData'


const Table = (props) => {

  return (
    <div>
      <table id="myTable" className="table table-bordered">
        <TableHeader info={props.info} />
        <TableData info={props.info} select={props.select} />
      </table>
    </div>





  )
}

export default Table
  // put either for or map loop within the angle brackets of <TableData />


  // <td>{item.category}</td>
  // <td>{item.saturday_rate}</td>
  // <td>{item.sunday_publicholiday_rate}</td>
  // <td>{item.carpark}</td>


  // <table>
  //   <thead>
  //     <tr>
  //       <th>Category</th>
  //       <th>Sat Rate</th>
  //       <th>Sun/PH Rate</th>
  //       <th>Carpark</th>
  //       <th>Weekday Rate 1</th>
  //       <th>Weekday Rate 2</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {props.info.map((item) => {
  //       return (
  //         <tr key={item.id}>
  //           <td>{element.carpark}</td>
  //           <td>{element.category}</td>
  //           <td>{element.weekdays_rate_1}</td>
  //           <td>{element.weekdays_rate_2}</td>
  //           <td>{element.saturday_rate}</td>
  //           <td>{element.sunday_publicholiday_rate}</td>
  //         </tr>
  //       );
  //     })}
  //   </tbody>
  // </table>
