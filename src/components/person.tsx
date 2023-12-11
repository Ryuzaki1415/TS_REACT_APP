type Personprops={
    name:{
        firstname:string
        lastname:string
    }
}

export const Person =(props:Personprops)=>
{
    return <div> This is {props.name.firstname} {props.name.lastname} </div>
}