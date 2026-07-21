import {Outlet,Navigate} from "react-router-dom";
import Navbar from "./navbar"

function ProtectedLayout({ isLoggedIn, setIsLoggedIn }){
    
    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
   return (
    <div>
       <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Outlet/>
    </div>
   )
}
export default ProtectedLayout;
