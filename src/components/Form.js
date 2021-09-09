import React from 'react'
import Input from './Input'
import Select from './Select'
import Button from './Button'

const Form = (props) => {
  return (
    <React.Fragment>
      <Input type="text" id="myInput" placeholder="Search carpark(s)" handleChange={props.handleChange} />

      <Select handleSelect={props.handleSelect} />

      <Button className="button" type="submit" name="Weekday Day Time" value="2" handleSubmit={props.handleSubmit} />
      <Button className="button" type="submit" name="Weekday Night Time" value="3" handleSubmit={props.handleSubmit} />
      <Button className="button" type="submit" name="Saturday" value="4" handleSubmit={props.handleSubmit} />
      <Button className="button" type="submit" name="Sunday" value="5" handleSubmit={props.handleSubmit} />
      <Button className="button" type="submit" name="Public Holiday" value="5" handleSubmit={props.handleSubmit} />
      <Button className="indication" type="button" name="Indicates current rate" handleSubmit={props.handleSubmit} />
    </React.Fragment>
  )
}

export default Form

// <Button className="button" type="submit" name="Public Holiday" value="5" handleSubmit={props.handleSubmit} />
