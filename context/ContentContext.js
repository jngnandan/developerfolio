import React, { Component } from 'react'

import {createContext, useEffect, useState} from 'react'
import Router, { useRouter } from 'next/router'


const ContentContext = createContext()

const ContentProvider = ({ children }) => {
    const [cool, setCool] = useState('')

    const singOut = () => {
        setContent('cool')
    }

    return(
        <ContentContext.Provider value={{cool}}>
            {children}
        </ContentContext.Provider>
    )
}

export {ContentContext, ContentProvider}