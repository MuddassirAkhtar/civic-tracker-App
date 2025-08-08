import { NavLink } from 'react-router'


const Navbar = () => {
  return (
          <div className='flex items-center justify-between px-20 py-5 bg-gradient-to-r from-blue-100 to-blue-300 text-thick m-10'>
            <h1 className="text-xl font-bold text-blue-800"> Civic Tracker</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Report">Report</NavLink>
            <NavLink to="/Dashbord">Dashbord</NavLink>
            <NavLink to="/Register">Register</NavLink>

          </div>
          
          
  )
}

export default  Navbar