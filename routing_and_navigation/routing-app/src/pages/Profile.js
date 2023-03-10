// import React from 'react'
import React ,{useEffect} from "react";
import {useParams } from "react-router";

function Profile() {
  const parameters = useParams();

  useEffect(() => {

  },[parameters])

  return (
    <div>
        <h1>Profile of {`${parameters.userId} ${parameters.ProjectId}`}</h1>
    </div>
  )
}

export default Profile


// import React from 'react'

// function Profile() {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile