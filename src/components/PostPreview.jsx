import React from 'react';

function stripHTMLTags(html) {
  // Create a temporary element to parse the HTML
  const tempElement = document.createElement('div');
  tempElement.innerHTML = html;

  // Replace &nbsp; entities with regular spaces
  const titleWithoutNbsp = tempElement.textContent || tempElement.innerText;
  const titleWithoutHtmlEntities = titleWithoutNbsp.replace(/&nbsp;/g, ' ');

  return titleWithoutHtmlEntities;
}

function formatDate(dateString) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "GMT"
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
}

function PostPreview({ postDetails }) {
  const formattedDate = formatDate(postDetails.datePosted);

  return (
    <div className="post hover:relative text-black-500">
      <div className="flex flex-col justify-center ml-32 mr-32">
        <a href={postDetails.link} target="_blank" rel="noopener noreferrer">
          <h1 className="font-bold text-base md:text-xl lg:text-2xl hover:underline mb-2">
            {stripHTMLTags(postDetails.title)}
          </h1>
        </a>
        <div className="italic mb-2" dangerouslySetInnerHTML={{ __html: postDetails.preview }} />
        <h1 className="italic text-slate-400 mb-2">{formattedDate}</h1>
      </div>
    </div>
  );
}

export default PostPreview;
