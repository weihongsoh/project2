import React from 'react'

const Button = (props) => {

  const handleSubmit = (event) => {
    props.handleSubmit(event.target.value)
  }

  return (
    <React.Fragment>
      <button type={props.type} className={props.className} value={props.value} onClick={handleSubmit}>{props.name}</button>
    </React.Fragment>
  )
}

export default Button
