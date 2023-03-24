import React from 'react'

export default function Popup ({open,onClose,id,newsFirstImage,newsDate,newsHeadline}) {
  if (!open) return null;
  return (
    <div key={id} className='bg-black/[.08] fixed top-0 left-0 h-screen w-screen place-content-center p-2'>
      <div id='container' className=' m-auto w-full md:w-3/5 h-auto  grid grid-cols-3 gap-2 bg-white fixed top-1/4 left-0 md:left-1/4 active:ease-in'>
        <p className='col-start-2 col-span-1 m-2  font-semibold text-slate-300'>{newsDate}</p>
        <h2 className='col-span-1 text-3xl font-semibold' onClick={onClose}>X</h2>
        <img className='col-span-full justify-self-center m-1' src={newsFirstImage} alt={newsFirstImage}/>
        <h3 className='col-span-full text-center m-1 font-medium text-2xl'>{newsHeadline}</h3>
        <p className='col-span-full text-center m-2' >View news on <a  href="https://www.transfermarkt.com/vancouver-whitecaps-fc/news/verein/6321" className='underline decoration-sky-500'>Transfermarkt.com</a></p>
      </div>
    </div>
  )
}
