import React from 'react'

import Layout from './components/Layout'

function SignIn() {
  return (
    <Layout title='About' description='About' keywords='About' content='About'>
        <div className='flex flex-row justify-center items-center h-screen'>
            <p className='text-red-500'>SignIn</p>
        </div>
    </Layout>
  )
}
export default SignIn
