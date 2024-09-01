import React from 'react'
// rfce
function Header({title,subtitle}) {
  return (
    <h1 className="title">
    {title}
    <span>{subtitle}</span>
  </h1>
  )
}

export default Header
