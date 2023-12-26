let username:string='dheeraj';
const user:string='dheeraj';
let man:boolean
let userid:'abc'|123
userid=123
 console.log(userid)

interface myinterface{
    ename:string,
    salary:number,
 }
type mario={
    hehe:string
}
type mytype={
    field1:string;
    field2:number;
 }
const array:number[]=[1,2,3,4,5,6,6,7]
const array2:string[]=['dj','unni']
const objarray:{name:string,id:number}[]=[{name:'sasi',id:11}]


function myFunc(param1:string,param2:number):void{
    console.log(`the number is ${param2} and the string is ${param1}`)
}
myFunc('dheeraj',69)

let myobj:myinterface={ename:'ddd',salary:9999}

let myobj2:mytype={field1:'sdsd',field2:888}



type admin=mytype&mario&{
dasd:string
}



let adminnew:admin