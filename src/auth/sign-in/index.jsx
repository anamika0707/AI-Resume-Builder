import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function SignInPage() {
  return (
    <div className='flex justify-center my-20 item-center'>
      <SignIn/>
    </div>
  )
}

export default SignInPage
