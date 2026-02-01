import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-row justify-between bg-black p-2'>
      <div>
        <p className='text-xl font-bold text-white'>GenNews.</p>
      </div>
      <div className='hidden sm:flex flex-row gap-10 text-white font-semibold text-sm'>
        <p>About</p>
        <p>Sports</p>
        <p>Ecnomics</p>
        <p>Geopolitics</p>
      </div>
      <div></div>
    </div>
  )
}

export default Nav
