import { Routes} from "react-router"
import { Route } from "react-router"
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Dashbord from "../Pages/Dashbord";
import Report from "../Pages/Report";
const Mainroutes = () => {
  return (
    <div className="w-screen h-[92%] w-[100%]  m-5 ">
      <Routes >
  <Route path="/" element={<Home/>} />
  <Route path="/Register" element={<Register/>} />
  <Route path="/Dashbord" element={<Dashbord/>} />
  <Route path="Report" element={<Report/>} />


</Routes>
    </div>
  )
}

export default Mainroutes