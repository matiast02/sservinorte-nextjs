import React from 'react'
import Head from 'next/head'

const HomeLayout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Servinorte</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        </Head>
        <div className="container">
        { children }

        </div>

        </>
    )
}

export default HomeLayout;
