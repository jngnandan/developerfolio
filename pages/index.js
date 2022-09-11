import React from 'react'
import {useContext} from 'react'
import Layout from './components/Layout'
import {ContentContext} from '../context/ContentContext'
import PostCard from './postcard'

function Home() {
  const {posts} = useContext(ContentContext)

  // console.log(posts.body)

  console.log(posts)
  return (
    <Layout title='About' description='About' keywords='About' content='About'>
        <div className='flex flex-col justify-start items-start h-screen'>
          {posts.map((post, key) => (
            <PostCard post={post} key={post.key}/>
          ))}
        </div>
    </Layout>
  )
}
export default Home