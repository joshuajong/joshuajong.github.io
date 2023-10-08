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

  const addTask = async () => {
    try {
      // Define the task data you want to send to your backend
      const newTask = 'New Task Title';

      // Send a POST request to your Rust backend
      const response = await fetch('http://localhost:8000/addtask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        // Task added successfully, you can handle the response if needed
        console.log('Task added successfully');
      } else {
        // Handle the error response from the backend
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

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
      <div className="mt-4">
        {/* Add Task Button */}
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default Thoughts;