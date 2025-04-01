import React from 'react';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  let { id } = await params;
  const response = await fetch("https://jsonplaceholder.typicode.com/albums/" + id);
  const data = await response.json();
  return {
    title: data.title,
  };
}

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();

  return (
    <div >
      <h1>Albums List</h1>
      <div >
        {data.map((a) => (
          <Link 
            href={`/albums/${a.id}`} 
            key={a.id} 
          >
            <h2 >{a.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
