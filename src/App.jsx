
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [users, setUsers] = useState([])
  const [firstname,setfirstname]=useState('');
  const [lastname,setlastname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(data => setUsers(data.data))
  }, [users])

  const handleSubmit=()=>{
    axios.post('http://localhost:3000/users',{
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password,
    })
  }


  return (
    <>

    <div>
      <h1>Please filup this form</h1>
      <input onChange={(e)=>setfirstname(e.target.value)} type="text" placeholder='firstname' /> <br />
      <input onChange={(e)=>setlastname(e.target.value)} type="text" placeholder='lastname' /> <br />
      <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder='email' /> <br />
      <input onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='password' /> <br />

      <button onClick={handleSubmit} >Submit</button>
    </div>

      <h1>User List</h1>
      {
        users.map((item) => (
        
           <ul>
            <li>
            {item.firstname} {item.lastname} ,{item.email},{item.password}
    
            </li>
           </ul>
         


        ))
      }

    </>
  )
}

export default App
