import React from 'react'
import {useContext} from 'react'
import Layout from './components/Layout'
import {ContentContext} from '../context/ContentContext'
import PostCard from '../pages/components/PostCard'

function Home() {
  const {posts, blogs} = useContext(ContentContext)
  const {body} = blogs
  console.log(posts)
  return (
    <Layout title='About' description='About' keywords='About' content='About'>
        <div className='flex flex-col justify-start items-start h-screen'>
          {blogs.map((blog, key) => (
            <PostCard blog={blog} key={key}/>
          ))}
        </div>
    </Layout>
  )
}
export default Home