import React from 'react'
import './UsersList.css'
// import uuid from 'react-uuid'

const UsersList = ({users, deleteUser}) => {
  return (
    <div className='userList'>
    <div className="userList-container container">
    {users.map((user) => {
        return(
            <div className="card" key={user.id}>
                <div className="card-inner">
                    <img src={user.image} alt={user.name} height={150} width={150} />
                    <h3>{user.firstName} {user.lastName} <br /> {user.age} age </h3>
                    <p>From: {user.from}</p>
                    <p>Job: {user.job}</p>
                    <p>Gender: {user.gender}</p>
                    <div className='social-link'>
                      <img src={'https://avatars.mds.yandex.net/i?id=1947719b33d92e154c18b7b9262d6bbd7ed405fa-4495871-images-thumbs&n=13'} alt="" width={50} height={50} />
                      <a href="https://t.me/fayozbe_coder">Telegram</a>
                    </div>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default UsersList