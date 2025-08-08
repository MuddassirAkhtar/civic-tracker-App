import Mainroutes from './Routes/Mainroutes';
import Navbar from './Components/Navbar' 
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className='bg-blue-50 text-gray-800  w-screen overflow-x-hidden flex-grow'>
      <Navbar/>
      <Mainroutes />
      <Footer/>
    </div>
  )
}

export default App