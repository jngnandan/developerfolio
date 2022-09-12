import Link from "next/link"
import Layout from '../components/Layout'
import {useContext, useState, useEffect} from 'react'
import {ContentContext} from '../../context/ContentContext'
import { useRouter } from 'next/router'
import {collection, getDocs, setDoc, doc, query, getFirestore} from 'firebase/firestore'
import {db, auth, provider} from '../../firebase'
import { Oval } from "react-loader-spinner"

const PostItem = () => {
    const [author, setAuthor] = useState(null)
    const {blogs} = useContext(ContentContext)

    const { query } = useRouter();
    const slug = query.slug
    const blog = blogs.find((blog) => blog.props.id === slug);
    
    const {id, body} = blog.props
    const {title, description} = body

    console.log(blog.props)


//     useEffect(() => {
//         const getBooks = async () => {
//         const querySnapshot = await getDocs(collection(db, 'posts'))
//         querySnapshot.docs.map(doc => doc.id === slug && setAuthor(doc.data()))
//     }
//     getBooks()
// }, [])




    return(
        <Layout>
            {blog? 
            <div className="my-4">
                <h1 className="font-bold my-3 text-4xl pt-6">{title}</h1>
                <p className="border-t my-6"></p>
                <p className="text-md my-5">{description}</p>
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
            </div>}
        </Layout>

    )
}
export default PostItem