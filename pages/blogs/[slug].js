import Link from "next/link"
import Layout from '../components/Layout'
import {useContext} from 'react'
import {ContentContext} from '../../context/ContentContext'
import { useRouter } from 'next/router'


const PostItem = () => {
    const {posts} = useContext(ContentContext)
    const { query } = useRouter();
    const { slug } = query;

    const post = posts.find((post) => post.id === query.slug);
    // console.log(post.body)
    const {title, description, date} = post.body
    return(
        <Layout>
            <div className="my-4">
                <h1 className="font-bold my-3 text-4xl pt-6">{title}</h1>
                <p className="border-t my-6"></p>
                <p className="text-md my-5">{description}</p>
            </div>
        </Layout>

    )
}
export default PostItem