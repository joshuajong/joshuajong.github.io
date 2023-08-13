import React from 'react';


function Main() {
  console.log("helo from main");
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-400 p-4 ">
      <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
      <p className="mt-2">TESTING ABOUT PAGE.</p>
      <button className="mt-4 bg-gray-800 text-slate-400 px-4 py-2 rounded hover:bg-gray-700">
        Click Me
      </button>
    </div>
    
  )
}

export default Main;