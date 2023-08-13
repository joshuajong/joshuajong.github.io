import React from 'react';

function AboutSection({ content }) {
  return (
    <div className="mx-auto grid grid-cols-3 w-2/3">
      <div className="col-span-1 border-r border-red-500 p-4">
        <img src={ content.orgLogo } alt="Logo"></img>
        <div className="mt-2">
          {content.orgInfo.map((text, index) => (
            <div key={index}>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 p-4">
        {content.mainText.map((text, index) => (
          <div key={index}>
            <span>{text}</span>
          </div>
        ))}
        <div className="mt-2">
          <span>{content.additionalText}</span>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
