import React from 'react';
import Post from '../components/Post.jsx';

function Thoughts() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-400 p-4">
      <div className="mb-24 mt-12">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">thoughts</h1>
      </div>
      <div className="w-2/3 mx-auto grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-left">
        <Post title="Hello" />
        <Post title="Hello" />
        <Post title="Hello" />
        <Post title="Hello" />
        <Post title="Hello" />
        <Post title="Hello" />
        <Post title="Hello" />
        <Post title="Hello" />
      </div>
    </div>
  );
}


export default Thoughts;