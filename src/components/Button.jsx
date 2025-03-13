import React from 'react'

const Button = ({text}) => {
  return (
    <div >
        <button className='w-[147px] h-[39px] bg-[#0154AA] text-white rounded-[8px] font-roman cursor-pointer'>{text}</button>
    </div>
  )
}

export default Button