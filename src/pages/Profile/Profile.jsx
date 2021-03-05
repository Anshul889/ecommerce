import React from 'react'
import { Button } from '../../components/CustomButton/Button'
import {auth} from '../../firebase/firebase.utils'

const Profile = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Logout</Button>
    </div>
  )
}

export default Profile
