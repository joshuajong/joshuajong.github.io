import React from 'react';

function NotFound() {
  return (
    <div className="bg-gray-500 text-white p-4">
      <p className="mt-2">We're working hard to get this page up for you :)</p>
      <div className="flex justify-center mt-4">
        <img
          src="/images/error.jpg"
          alt="Error"
          className="max-w-screen-md max-h-screen-md"
        />
      </div>
      <a href="https://www.freepik.com/free-vector/404-error-with-landscape-concept-illustration_20602801.htm#query=404%20page&position=12&from_view=keyword&track=ais">Image by storyset</a> on Freepik
    </div>
  );
}

export default NotFound;