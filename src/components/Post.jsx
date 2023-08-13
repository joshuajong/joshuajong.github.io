import React from 'react';

function Post( { title, date, link } ) {
  return (
    <div className="hover:relative hover:opacity-100 opacity-50 text-slate-400 p-8 h-24 w-96 rounded border border-red-500">
      <div className="flex flex-col items-center justify-center">
        <h1>{ title }</h1>
      </div>
    </div>
  );
}

export default Post;