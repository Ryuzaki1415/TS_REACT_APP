
type Statusprops={
    status:'loading'|'success'|'error';
}


export const Status=(props:Statusprops)=>{
    let message:string
    if(props.status==='loading')
    {
        message='LOADING....'
    }else if(props.status==='success'){
        message='Data Fetched Succesfully!'
    }
    else{
        message='ERROR'
    }
return(
    <div>
        <h1>Status:{message}</h1>
    </div>
)
}