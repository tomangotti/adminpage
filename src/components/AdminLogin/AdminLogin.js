import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

const AdminLogin = ({admin, setAdmin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleLogin = () => {
        setAdmin(true)
        console.log(admin)
        navigate('/admin-dashboard')
    }

    return(
        <div>
            <h1>Admin Login</h1>
            <div>
                <h2>Login</h2>
                <div>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e)}/>
                    <button type="submit" onClick={handleLogin}>Login</button>
                </div>
                    
                
            </div>
        </div>
    )
}


export default AdminLogin