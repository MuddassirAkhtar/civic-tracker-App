import Home from "../Pages/Home";
import Report from "../Pages/Report";
import Dashbord from "../Pages/Dashbord";

const Mainroutes = () => {
  return (
    <div className="w-screen h-[92%] m-5">
      {/* Render all three components in the same page */}
      <Home />
      <Report />
      <Dashbord />
    </div>
  );
};

export default Mainroutes;
