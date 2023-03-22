import React from 'react'
let style = {
    display : 'flex',
    justifyContent : 'center',
    alignItems: 'center',
    flexWrap : 'wrap'
}
let inputStyle = {
  margin : '10px',
  padding : '10px 20px',
  borderRadius : '10px',
  border: 'aliceblue'
}
function Form() {
  return (
    <div style={style}>
      <input placeholder='First Name' style={inputStyle} type="text" name="frst Name" />
      <input placeholder='Last Name' style={inputStyle} type="text" name="2nd Name" />
      <input placeholder='Email' style={inputStyle} type="email" name="email"/>
    </div>
  )
}

export default Form
