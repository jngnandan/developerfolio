import React from 'react'
import Link from 'next/link'

const PostCard = (props) => {
    const {blog, key} = props
    const {body, id} = blog.props
    // console.log(blog.props)
    const {title, description,} = body

    return (
        <div className='my-4'>
            <Link href={`/blogs/${id}`}>
                <h1 className='font-semibold hover:text-red-500 my- text-xl'>{title}</h1>
            </Link>
            <p className='text-gray-500 line-clamp-3'>{description}</p>
            <p className='text-gray-500 underline hover:text-red-500'><Link href={`/blogs/${id}`}>More</Link></p>
            
        </div>
  )
}
export default PostCard
