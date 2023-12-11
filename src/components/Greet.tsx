type Greetprops={
    name:string
    msg?:number
    isloggedin:boolean
}
export const Greet =(props:Greetprops):JSX.Element=>{
    const {msg=0}=props



return (
        <div>
            <h2>
                {
                    props.isloggedin?`Welcome ${props.name} you have ${msg} msgs!`:`welcome guest`   
                }
            </h2>
        </div>
    )
}
