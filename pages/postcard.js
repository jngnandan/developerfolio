import React from 'react'
import Link from 'next/link'


function PostCard(props) {
    const {post} = props
    const {id, body} = post
    const {title, description,} = body
    console.log(body.date)
  return (
        <div className='my-4'>
            <Link href={`/blogs/${post.id}`}>
                <h1 className='font-semibold hover:text-red-500 my- text-xl'>{title}</h1>
            </Link>
            <p className='text-gray-500 line-clamp-3'>{description}</p>
            <p className='text-gray-500 underline hover:text-red-500'><Link href={`/blogs/${post.id}`}>More</Link></p>
            
            {/* <p className='text-gray-500'>{date}</p> */}

        </div>
  )
}
export default PostCard
