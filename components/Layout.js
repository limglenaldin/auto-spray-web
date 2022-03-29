import React from 'react'
import Head from 'next/head';

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Auto Spray IoT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col w-full min-h-screen bg-gray-50">
        {children}
      </div>
    </>
    
  )
}
