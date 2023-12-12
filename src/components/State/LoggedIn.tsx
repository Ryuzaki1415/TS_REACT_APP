import { useState } from "react"



export const LoggedIn=()=>{
const [isloggedin, setisloggedin] = useState(false)

const handleLogin=()=>{
    setisloggedin(true)
}
const handleLogout=()=>{
    setisloggedin(false)
}

    return(
        <div>
            <button onClick={handleLogin}> LOGIN </button>
            <button onClick={handleLogout}> LOGOUT </button>
            <div>USER IS {isloggedin?'LOGGED IN':"LOGGED OUT"}</div>

        </div>
    )
}