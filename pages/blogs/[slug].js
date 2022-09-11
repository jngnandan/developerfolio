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
    // console.log(post)
    const {title, description, date} = post.body
    return(
        <Layout>
            <div className="my-4">
                <h1 className="font-bold my-3 text-3xl pt-6">{title}</h1>
                <br />
                <p className="text-md">{description}</p>
            </div>
        </Layout>

    )
}
export default PostItem