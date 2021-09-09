import React from 'react'

const Select = (props) => {

  const handleSelect = (event) => {
    // console.log(event.target.value)
    props.handleSelect(event.target.value)
  }

  return (
    <React.Fragment>
      <select name="category" id="category" onChange={handleSelect} >
        <option value="All">All</option>
        <option value="Central, North & North East">Central, North & North East</option>
        <option value="East">East</option>
        <option value="Hotels">Hotels</option>
        <option value="Orchard Area">Orchard Area</option>
        <option value="Singapore Attractions">Singapore Attractions</option>
        <option value="South & CBD">South & CBD</option>
        <option value="West">West</option>
      </select>
    </React.Fragment>
  )
}

export default Select
