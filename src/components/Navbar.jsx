import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-col gap-3 text-white bg-slate-950 px-[5px] py-[5px] h-screen w-[260px] fixed top-0 left-0  '>
      <h1 className='text-[20px] text-left flex gap-2.5 items-center '> <i class="fa-solid fa-desktop"></i>Dashboard</h1>
      <p>ENTITIES </p>
      <ul className='flex flex-col gap-[25px]   '>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i>Users</li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i>Products</li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i>Categories </li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i>Orders </li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i>Reviews </li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-table"></i>Promo_codes</li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-lock"></i>Change Password</li>
        <li className='flex gap-2.5 items-center'><i class="fa-solid fa-file"></i>API docs</li>
      </ul>
    </div>
  )
}

export default Navbar
