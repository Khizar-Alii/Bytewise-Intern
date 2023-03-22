import React from 'react'

let style = {
    display : 'flex',
    margin : '10px auto',
    padding : '10px 20px',
    fontSize : '18px',
    borderRadius : '10px',
    border : 'aqua',
    backgroundColor : 'darksalmon',
    cursor : 'pointer',
    color : 'white'
}
function subButton() {
  return (
    <div>
      <button style={style} type="submit">Subscribe</button>
    </div>
  )
}

export default subButton
