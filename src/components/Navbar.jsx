

import { useContext } from 'react'
import harvardLogo from '../assets/harvard.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={harvardLogo} alt='' />
          <span className='font-bold'>ABROAD UNIVERSITY</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/all-services'>All Services</Link>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/add-service' className='justify-between'>
                  Add Service
                </Link>
              </li>
              <li>
                <Link to='/manage-services'>Manage Service</Link>
              </li>
              <li>
                <Link to='/booked-services'>Booked-Services</Link>
              </li>
              <li>
                <Link to='/service-to-do'>Service-To-Do</Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar