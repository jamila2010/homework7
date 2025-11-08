import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-col gap-3 text-white bg-slate-950 px-[5px] py-[5px] h-screen w-[260px] fixed top-0 left-0  '>
      <h1 className='text-[20px] text-left flex gap-2.5 items-center '> <i class="fa-solid fa-desktop"></i>Dashboard</h1>
      <p>ENTITIES </p>
      <ul className='flex flex-col gap-[25px]   '>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i><NavLink to={"/"}> Users      </NavLink></li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i><NavLink to={"/products"}> Products   </NavLink></li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i><NavLink to={"/categories"}> Categories </NavLink></li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i><NavLink to={"/orders"}> Orders     </NavLink></li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i><NavLink to={"/reviews"}> Reviews    </NavLink></li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i><NavLink to={"/promocodes"}> Promo_codes</NavLink></li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-lock"></i> <NavLink to={"/changepassword"}> Change Password</NavLink></li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-file"></i> <NavLink to={"/docs"}>API docs</NavLink> </li>
      </ul>
    </div>
  )
}

export default Navbar
