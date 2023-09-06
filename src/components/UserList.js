import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {
    const [userlists, setUserlists] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        try{
            setLoading(true)
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
                setUserlists(res.data)
            })
            setLoading(false)
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <div>
        {
            loading ? 
            'loading...' 
            : 
            <div>
                {userlists.map(user => (
                    <div key={user.id}>
                        <h2>Name: {user.name}</h2>
                        <p>Email: {user.email}</p>
                    </div>
                ))
                }
            </div>
        }
    </div>
  )
}

export default UserList