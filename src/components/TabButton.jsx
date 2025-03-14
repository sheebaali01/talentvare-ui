import React from 'react'

const TabButton = ({type}) => {
  return (
    <>
        <button className='border border-[#737A91] rounded-[5px] text-[#737A91] text-[12px] font-medium pt-[8px] pb-[8px] pr-[15px] pl-[15px]'>
            {type}
        </button>
    </>
  )
}

export default TabButton