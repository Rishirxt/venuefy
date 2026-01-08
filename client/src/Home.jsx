import React from 'react'

function Home() {
  const stored = localStorage.getItem('user')
  const user = stored ? JSON.parse(stored) : null

  return (
    <div style={{padding:20}}>
      <h1>Home</h1>
      {user ? <p>Welcome, {user.name || user.email}!</p> : <p>You are not logged in.</p>}
    </div>
  )
}

export default Home
