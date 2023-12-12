type Greetprops={
    name:string
    msg?:number
    isloggedin:boolean
}
export const Greet =({name,msg=0,isloggedin}:Greetprops):JSX.Element=>{
   

return (
        <div>
            <h2>
                {
                    isloggedin?`Welcome ${name} you have ${msg} msgs!`:`welcome guest`   
                }
            </h2>
        </div>
    )
}
