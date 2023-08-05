import React from 'react';


function Main() {
  console.log("helo from main");
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
      <p className="mt-2">This is a sample component using Tailwind CSS classes.</p>
      <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
        Click Me
      </button>
    </div>
    
  )
}

export default Main;