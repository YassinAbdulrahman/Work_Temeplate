import React from 'react'
import Photo from "../assets/icon/search.svg"
function BoxServices({item}) {
  return (
    <div className='boxServices rounded-[10px] h-[154px] w-[253px] flex flex-col justify-center items-center border-[1px] border-solid border-whitelight'>
       <img src={Photo} alt="search" className='w-[60px] h-[60px]' />
       <p className="text-blue text-[15px] leading-[25.6px] font-medium mt-[10px] text-center">{item.title}</p>
    </div>
  )
}

export default BoxServices