
export type ProfileProp={
    name:string
}
export const Profile=({name}:ProfileProp)=>{
    return(
        <div>PRIVATE PROFILE COMPONENT. Name of the account is {name}</div>
    )
}
