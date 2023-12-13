
import { profile } from 'console';
import './App.css';
import { Input } from './Input';
import { Private } from './components/Auth/Private';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonList';
import { LoggedIn } from './components/State/LoggedIn';
import { User } from './components/State/User';
import { Status } from './components/Status';
import { Heading } from './components/heading';
import { Oscar } from './components/oscar';
import { Person } from './components/person';
import { Profile } from './components/Auth/Profile';
import { List } from './components/Gernerics/List';

function App() {

  // const Namelist=[
  //   {
  //     first:"WAYNE",
  //     last:"ROONEY"
  //   },
  //   {
  //   first:'BRUNO',
  //   last:'FERNANDEZ'
  //   }
  // ]

  // const PersonName={
  //   firstname:'BRUCE',
  //   lastname:"WAYNE"
  // }
  return <div className='App'>
    {/* <Greet name='Monu' msg={10} isloggedin={true} /> 
    <Person name={PersonName} />
    <PersonList names={Namelist}/> */}
    <Status status='success'/>
    {/* <Oscar>
      <Heading>
        The oscar goes to dicaprio!
      </Heading>
    </Oscar> */}
    <Greet name='DJ' isloggedin={true}/>

    <Button handelClick={(event,id)=>{
      console.log('Button has been clicked',event,id)
    }}></Button>

    <Input value=''handleChange={event=>console.log(event)}/>
    <LoggedIn/>
    <User/>

    <Private isLoggedIn={true} component={Profile}/>

    <List 
    items={['abc']}
    onClick={(item)=>console.log(item)}
    />


  </div>
  
}

export default App;
