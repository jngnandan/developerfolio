import React from 'react'

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children, title, description, keywords, content, author}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta author="author" content={author} />
        </Head>
        <Header />
        <div>
            <div className='mx-10'>{children}</div>
        </div>
        <Footer />
    </div>
  )
}

Layout.defaultProps = { 
    title: 'GN',
    description: 'GN',
    keywords: 'GN',
    content: 'GN',
}
