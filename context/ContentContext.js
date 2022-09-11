import React, { Component } from 'react'

import {createContext, useEffect, useState} from 'react'
import Router, { useRouter } from 'next/router'

import {collection, getDocs, setDoc, doc, query, getFirestore} from 'firebase/firestore'
import {db, auth, provider} from '../firebase'
import {signInWithPopup} from 'firebase/auth'


const ContentContext = createContext()

const ContentProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
       const getPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        setPosts(querySnapshot.docs.map(doc => {
            return{
                id: doc.id,
                body: {
                //   ...doc.data()  
                title: doc.data().title,
                description: doc.data().description,
                date: doc.data().date,
                }}}   
            ))
    } 
       getPosts()
    }, [])
    

    return(
        <ContentContext.Provider value={{posts}}>
            {children}
        </ContentContext.Provider>
    )
}

export {ContentContext, ContentProvider}