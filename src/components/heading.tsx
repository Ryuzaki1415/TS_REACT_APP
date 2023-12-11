 
 type Headingprops={
    children:string
 }

 export const Heading=(props:Headingprops)=>{
    return(
        <h1>
            {props.children}
        </h1>
    )
 }