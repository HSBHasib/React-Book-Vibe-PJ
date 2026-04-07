import { NavLink } from 'react-router'

const Navber = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm">
      <div className='navbar sm:w-[90%] mx-auto'>
            <div className="navbar-start max-[500px]:-space-x-3 ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost border-none lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 active:scale-95" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        <li><NavLink to='/' className={({isActive}) => `${
                            isActive ? 'text-green-500 border border-green-500 rounded-md' : ''
                        }`}>Home</NavLink></li>
                        <li><NavLink to='/page' className={({isActive}) => `${
                            isActive ? 'text-green-500 border border-green-500 rounded-md' : ''
                        }`}>Listed Books</NavLink></li>
                        <li><NavLink to='/page2' className={({isActive}) => `${
                            isActive ? 'text-green-500 border border-green-500 rounded-md' : ''
                        }`}>Page to Read</NavLink></li>
                    </ul>
                </div>
                <a className="text-[22px] font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><NavLink to='/' className={({isActive}) => `${
                        isActive ? 'text-green-500 border border-green-500 rounded-md ' : ''
                    }`}>Home</NavLink></li>
                    <li><NavLink to='/page' className={({isActive}) => `${
                        isActive ? 'text-green-500 border border-green-500 rounded-md ' : ''
                    }`}>Listed Books</NavLink></li>
                    <li><NavLink to='/page2' className={({isActive}) => `${
                        isActive ? 'text-green-500 border border-green-500 rounded-md ' : ''
                    }`}>Page to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn border-none rounded-md text-white bg-green-500">SingIn</a>
                <a className="btn border-none rounded-md text-white bg-cyan-500">SingUp</a>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Navber

