console.log("this is a lesson on generics.")

type Data<T>={
    keys:T[]}
// } here T is a generic type


type anotherData<T>={
    anotherkey:T[]
}

const var1:Data<number>={keys:[1,2,3,4]}
const anothervar:anotherData<String>={anotherkey:['abc','def','asbdjabsjd']}


console.log(var1)
console.log(anothervar)