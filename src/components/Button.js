import React from 'react'

const Button = (props) => {
  return (
    <React.Fragment>
      <button type={props.type} onClick={props.handleSubmit}>{props.value}</button>
    </React.Fragment>
  )
}

export default Button
