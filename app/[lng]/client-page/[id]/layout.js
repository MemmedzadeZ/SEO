import React from 'react'

//bir nece sehifeye aid olan
//Metadata 2 cur olur


export async function generateMetadata({ params }) {
  let { id } = await params
  const response = await fetch("https://jsonplaceholder.typicode.com/albums/" + id)
  const user = await response.json();
  return {
    title: user.name,
    desctiption: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

export default function Layout({children}) {
  return (
      <div>{ children }</div>
  )
}
