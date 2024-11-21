import React from 'react'
import { useAuth } from "../auth/use-auth-client"

const AuthTrial = () => {

    const { login, loginNFID } = useAuth()
  return (
    <div>
        <div>AuthTrial</div>
        <button onClick={() => loginNFID()}>Login NFID</button>
        <button onClick={() => login()}>Login NFID</button>
    </div>
  )
}

export default AuthTrial