import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  const [auth, setAuth] =useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')


  useEffect(() => {
    axios.get("http://localhost:8081")
    .then(res => {
      if(res.data.Status === 'Success'){
        setAuth(true)
        setName(res.data.name)
      }else{
        setAuth(false)
        setMessage(res.data.Meessage)
      }
    })
  
   
  }, [])

  const handleLogout =() =>{
    axios.get("http://localhost:8081/logout")
    .then(res =>{
      if(res.data.Status === 'Success'){
        location.reload(true)

      }else{
        alert("Error")
      }
    }).catch(err => console.log(err))
  }
  
  return (
    <div>
      {
        auth ? 
        <>
        puedes verlo <strong>{name}</strong> <br />
        <button className='bg-orange-600 py-2  rounded-md' onClick={handleLogout}>Logout</button>
        </>
        :
        <>
        Logeuate
        <Link to={'/login'} className='bg-orange-600 py-2 px-3  rounded-md'>login</Link>
        </>
      }

    </div>
  )
}

export default Home