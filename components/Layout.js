import React from 'react'

export default function Layout({children}) {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-gray-50">
        {children}
      </div>
    </>
    
  )
}
