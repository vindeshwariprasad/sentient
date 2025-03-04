import React from 'react'

const Usernavbar = ({user}) => {
  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '16px 24px', 
        backgroundColor: 'white', 
        borderBottom: '1px solid #E5E7EB',
        borderRadius: '16px'
      }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Hello <br/> {user.name}.</h2>
        <img 
          src={user.profileImage} 
          alt={user.name} 
          style={{ width: '48px', height: '48px', borderRadius: '50%' }} 
        />
      </div>
  )
}

export default Usernavbar