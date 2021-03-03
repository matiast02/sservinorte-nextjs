import React from 'react'
import Head from 'next/head'

const HomeLayout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Servinorte</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Home layout</h1>
        { children }
        </>
    )
}

export default HomeLayout;
