import React from 'react'

const Input = (props) => {
  // const [input, setInput] = useState("")

  const handleChange = (event) => {
    // console.log(event.target.value, "from input")
    props.handleChange(event.target.value)
  }

  return (
    <React.Fragment>
      <input placeholder={props.placeholder} type={props.type} onChange={handleChange} ></input>
    </React.Fragment>
  )
}

export default Input
