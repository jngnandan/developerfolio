import React from 'react'
import {useContext} from 'react'
import Layout from './components/Layout'
import {ContentContext} from '../context/ContentContext'
import PostCard from '../pages/components/PostCard'
import { Oval } from "react-loader-spinner"


function Home() {
  const {blogs} = useContext(ContentContext)
  return (
    <Layout title='About' description='About' keywords='About' content='About'>
        {blogs?
        <div className='flex flex-col justify-start items-start h-screen'>
          {blogs.map((blog, key) => (
            <PostCard blog={blog} key={key}/>
          ))}
        </div>
        :
       <div className="my-4 flex flex-row justify-center items-center h-80">
                <Oval
                    height={80}
                    width={80}
                    color="red"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="red"
                    strokeWidth={2}
                    strokeWidthSecondary={2}/>
            </div>
      }
    </Layout>
  )
}
export default Home