import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import UsersList from './components/users/UsersList'
import NewUsers from './components/newUsers/NewUsers'

function App() {
  const [users, setUsers] = useState([])
  
const [showModal, setShowModal] = useState(false)

  const deleteUser= (id) =>{
  setUsers((prev) => {
    return prev.filter((user) => {
      return user.id !== id
    })
  })
  }
  
  const deleteModal = (e) => {
    if(e.target.className === 'overlay' || e.key === 'Escape'){
      setShowModal(false)
    }
  }

  const addUser = (user) =>{
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  } 


  return (
    <div onClick={ deleteModal} onKeyDown={ deleteModal} className="App">
      <Navbar usersLength={users.length}/>
      <main>
      {users.length > 0 ? "" :   
        <div className="no-users">
          <h2>No Users</h2>       
        </div>}
        <UsersList users={users} deleteUser={deleteUser}/>
      </main>
      {showModal && <NewUsers addUser={addUser} />}
      <button onClick={() => {
        setShowModal(true)
      }} className="create-user">Create-user</button>
      <Footer/>
    </div>
  )
}

export default App
