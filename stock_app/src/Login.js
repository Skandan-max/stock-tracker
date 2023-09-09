import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {

    const [userName, setUserName] = useState("");
    const [Pass, setPass] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.get(`http://localhost:8000/Users/${userName}`);
            const datafound = res.data
            navigate("/dashboard", {state : {datafound}})
        }
        catch(error){
            console.log(error)
        }
        
    }       
    return ( 
        <div className="loginpage">
            <form>
                <label>User Name</label><br/>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input type="password" value={Pass} onChange={(e) => setPass(e.target.value)}/><br/>
                <button onClick={(e) => {handleSubmit(e)}}>Login</button>
            </form>
        </div>
     );
}
 
export default Login;