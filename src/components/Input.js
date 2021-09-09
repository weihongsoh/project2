import React from 'react'

const Input = (props) => {
  // const [input, setInput] = useState("")

  const handleChange = (event) => {
    // console.log(event.target.value, "from input")
    props.handleChange(event.target.value)


  }

  return (
    <React.Fragment>
      <input type={props.type} id={props.id} placeholder={props.placeholder} onKeyUp={handleChange} ></input>
    </React.Fragment>
  )
}

export default Input
