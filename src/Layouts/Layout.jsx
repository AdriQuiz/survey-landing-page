import React from 'react'

function Layout({children, className = ""}) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Layout