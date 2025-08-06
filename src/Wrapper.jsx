import {createContext} from "react";
import {useState} from"react";
export const dashbordcontext = createContext(null)
const Wrapper = (props) => {
          const[dashbord,setdashbord] = useState([])
  return (
    <dashbordcontext.Provider value ={[dashbord,setdashbord]}>
          {props.children}
    </dashbordcontext.Provider>
  )
}

export default Wrapper