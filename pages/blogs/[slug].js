import Link from "next/link"
import Layout from '../components/Layout'
import {useContext, useState, useEffect} from 'react'
import {ContentContext} from '../../context/ContentContext'
import { useRouter } from 'next/router'
import {collection, getDocs, setDoc, doc, query, getFirestore} from 'firebase/firestore'
import {db, auth, provider} from '../../firebase'


const PostItem = () => {
    const [author, setAuthor] = useState([])
    const [place, setPlace] = useState(null)

    const {posts} = useContext(ContentContext)
    const { query } = useRouter();
    // const { slug } = query;
    // const post = posts.find((post) => post.id === query.slug);
    
    const slug = query.slug

   
    //   console.log(slug)



    useEffect(() => {
        const getBooks = async () => {
        const querySnapshot = await getDocs(collection(db, 'posts'))
        querySnapshot.docs.map(doc => doc.id === slug && setAuthor(doc.data()))
    }
    getBooks()
}, [posts])

    const {title, description, date} = author



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