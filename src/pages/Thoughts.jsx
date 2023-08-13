import React from 'react';
import Post from '../components/Post.jsx';

function Thoughts() {
  const posts = [
    {
      title: 'Introduction to React',
      preview: 'React is a JavaScript library...',
      datePosted: 'August 10, 2023',
      writtenBy: 'John Doe',
      link: 'https://www.google.com',
    },
    {
      title: 'Introduction to React',
      preview: 'React is a JavaScript library...',
      datePosted: 'August 10, 2023',
      writtenBy: 'John Doe',
      link: 'https://www.google.com',
    },
    {
      title: 'Introduction to React',
      preview: 'React is a JavaScript library...',
      datePosted: 'August 10, 2023',
      writtenBy: 'John Doe',
      link: 'https://www.google.com',
    },
    {
      title: 'Introduction to React',
      preview: 'React is a JavaScript library...',
      datePosted: 'August 10, 2023',
      writtenBy: 'John Doe',
      link: 'https://www.google.com',
    },
    {
      title: 'Introduction to React',
      preview: 'React is a JavaScript library...',
      datePosted: 'August 10, 2023',
      writtenBy: 'John Doe',
      link: 'https://www.google.com',
    },
    {
      title: 'Introduction to React',
      preview: 'React is a JavaScript library...',
      datePosted: 'August 10, 2023',
      writtenBy: 'John Doe',
      link: 'https://www.google.com',
    }
  ]
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-900 p-4">
      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">thoughts</h1>
      </div>
      <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {posts.map((post, index) => (
          <Post
            key={ index }
            title={ post.title }
            datePosted={ post.datePosted }
            link={ post.link }
            preview={ post.preview }
            writtenBy={ post.writtenBy }
          />
        ))}
      </div>
    </div>
  );
}


export default Thoughts;