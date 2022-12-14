import Link from 'next/link'
import React, { Component, useContext, useEffect } from 'react'
// import ProtectedRoute from './ProtectedRoute'

const Header = () => {

  return (
    <div className='flex flex-row justify-between items-center h-14 shadow bg-neutral-900'>
        <div className='pl-5 text-red-500'>
          <Link href="/">Nandan</Link>
        </div>

        <nav>
          <ul className='flex flex-row justify-start'>
            <li className='mx-2 pr-5 text-sm'>
              <Link href="/about">About</Link>
            </li>
            <li className='mx-2 pr-5 text-sm'>
            <button>
              <Link href="/signin">Sign In</Link>              
            </button>
            </li>
            
          </ul>
        </nav>
      </div>
  )
}
export default Header
