import AddStock from "./AddStock";
import DisplayStock from "./DisplayStock";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";


const Dashboard = () => {
    const location = useLocation();
    const data = location.state.datafound
    return ( 
        <div className="dashboard-display">
            <Navbar name={data.id}/>
            <div>
                <AddStock to={data}/>  
                <DisplayStock data={data}/>
            </div>
        </div>
    );
}
 
export default Dashboard;