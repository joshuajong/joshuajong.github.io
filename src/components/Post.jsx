import React from 'react';

function Post( { title, datePosted, link, preview, writtenBy } ) {
  let linkProps = {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer"
  };

  return (
    <div className="hover:relative text-black-500">
      
      <div className="flex flex-col justify-center ml-32 mr-32">
        <a {...linkProps}>
          <h1 className="font-bold text-base md:text-xl lg:text-2xl hover:underline mb-2">{ title }</h1>
        </a>
        <h1 className="italic mb-2">{ preview }</h1>
        <h1 className="italic text-slate-400 mb-2">{ datePosted }</h1>
      </div>
    </div>
  );
}

export default Post;