import React from 'react'
import TableHeader from './TableHeader'
import TableData from './TableData'

const Table = (props) => {



  return (
    <div>
      <table className="table table-bordered">
        <TableHeader info={props.info} />
        <TableData info={props.info} />
      </table>
    </div>
  )
}

export default Table
// put either for or map loop within the angle brackets of <TableData />