import React from 'react';
import Link from 'next/link';

export async function generateMetadata({ params }) {
let { id } = await params
const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
const user = await response.json();
return {
  title: user.title,
}
}
const Albums = async ({params}) => {
    const { id } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
    const data = await response.json();

    return (
        <div>
            <h2>{data.title}</h2>
        </div>
    )
 
};

export default Albums;
