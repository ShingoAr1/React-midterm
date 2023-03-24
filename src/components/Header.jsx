import React from 'react'
import tmLogo from "../assets/img/transfermarkt.jpg"

const Header = () => {
  return (
    <div className='flex flex-col items-center border-solid border-2 border-sky-900 shadow-lg shadow-sky-900 m-3'>
      <h1 className='text-5xl font-bold text-sky-800'>Whitecaps Transfer News</h1>
      <div className='flex flex-row m-2'>
        <p>powered by </p><a href='https://www.transfermarkt.com/' >
          <img src={tmLogo} alt="TransferMarket.com" className='w-16 h-8'/></a>
      </div>
      </div>
  )
}

export default Header