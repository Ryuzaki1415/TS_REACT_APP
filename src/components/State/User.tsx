import { useState } from "react"


type AuthUser={
    name:string,
    email:string

}

export const User=()=>{


    const [user, setuser] = useState<AuthUser|null>(null)



    const handleLogin=() =>{
        setuser(
            {
                name:'DHEERAJ',
                email:'dj@123'
            }
    )}
    const handleLogout=()=>{
        setuser(null)
        
    }
    return(
        <div>
            <button onClick={handleLogin}>USER LOGIN </button>
            <button onClick={handleLogout}>USER LOGOUT </button>
            <div> USER NAME IS {user?.name} </div>
            <div> USER EMAIL IS  {user?.email}</div>

        </div>
    )
} 