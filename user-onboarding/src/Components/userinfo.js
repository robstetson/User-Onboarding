import React from 'react'

function UserInfo({ details}){
    if(!details){
        return <h2>Working to fetch your data</h2>;
}
return (
<div className='container'>
      <h3>{details.name}</h3>
      <p>{details.email}</p>
      <p>{details.password}</p>
      </div>
      )
}
export default UserInfo