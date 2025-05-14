import React from 'react'

function Button({ content, extra = "" }) {
  return (
    <button className={`bg-orange-500 ${extra} h-auto w-fit px-5 
      py-3 font-semibold text-white rounded-lg hover:bg-orange-700`}>
      {content}
    </button>
  )
}

export default Button