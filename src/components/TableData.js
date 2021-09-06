import React from 'react'

const TableData = (props) => {
  // const object = props.info
  console.log("TableDataJS info", props.info)
  console.log("TableDataJS info[0]", props.info[0])
  if (props.info) {
    console.log("object[0] values", Object.values(props.info[0]))
    console.log("object[0] values", typeof (Object.values(props.info[0])))
  }


  // props.info.map((element, index) => {
  //   console.log("element", element)
  // })

  return (
    <tbody>
      <tr>

        {props.info && Object.values(props.info).map((element, index) => {
          return (
            // console.log(element)
            <td key={index} id={index}>{element}</td>
          )
        })}

        <td>a</td>
        <td>b</td>
        <td>c</td>
      </tr>
    </tbody>
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