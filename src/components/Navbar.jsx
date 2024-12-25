



import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import harvardLogo from '../assets/harvard.png';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut, isDark, setIsDark } = useContext(AuthContext);
const[dropDownShow,setDropDownOff]=useState(false)
  const handleDarkModeToggle = () => {
    setIsDark(!isDark);
  };
const handleDropDown=()=>{
  setDropDownOff(!dropDownShow)
}
  return (
    <div className={`navbar bg-base-100 shadow-sm container px-4 mx-auto${isDark ? ' bg-black text-white' : ''}`}>
      <div className='flex-1 flex items-center'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={harvardLogo} alt='Harvard Logo' />
          <span className='font-bold text-lg  lg:text-2xl'>ABROAD UNIVERSITY</span>
        </Link>
      </div>
      <div className='flex-none flex items-center gap-4'>
        {/* Dark Mode Toggle */}
        <div onClick={handleDarkModeToggle} className="cursor-pointer text-2xl">
          {isDark ? <MdOutlineLightMode /> : <CiDark />}
        </div>

        <ul className={`hidden md:flex  menu menu-horizontal px-1 ${isDark?'':'text-white'}`}>
          <li className='lg:p-2 bg-blue-500 rounded'>
            <Link to='/'>Home</Link>
          </li>
          <li className='lg:p-2 bg-blue-500 rounded'>
            <Link to='/all-services'>All Services</Link>
          </li>
          {!user && (
            <li className='lg:p-2 bg-blue-500 rounded'>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
             onClick={handleDropDown}
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
           { dropDownShow&&(

<ul
tabIndex={0}
className={`menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 ${isDark ? 'bg-black text-white' : ''}`}
>
<li>
  <Link to='/add-service' className='justify-between'>
    Add Service
  </Link>
</li>
<li>
  <Link to='/manage-services'>Manage Services</Link>
</li>
<li>
  <Link to='/booked-services'>Booked Services</Link>
</li>
<li>
  <Link to='/service-to-do'>Service To-Do</Link>
</li>
<li className='mt-2'>
  <button
    onClick={logOut}
    className='bg-gray-300 block text-center w-full py-1 rounded-md'
  >
    Logout
  </button>
</li>
</ul>
           )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

