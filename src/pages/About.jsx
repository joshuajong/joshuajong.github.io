import React from 'react';
import AboutSection from '../components/AboutSection';

function About() {
  const internContent = [
    {
      mainText: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit. Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit. Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare',
      ],
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      orgInfo: ['Talenox Pte. Ltd.', 'Singapore', 'Nov 2022 to Feb 2022'],
      orgLogo: '/images/talenox_logo.png'
    },
    // Add more sections as needed
  ];
  const uniContent = [
    {
      mainText: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit. Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit. Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare',
      ],
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      orgInfo: ['Talenox Pte. Ltd.', 'Singapore', 'Nov 2022 to Feb 2022'],
      orgLogo: '/images/monash_university_logo.svg'
    },
    // Add more sections as needed
  ];

  const talenoxContent = [
    {
      mainText: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit. Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit. Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare',
      ],
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      orgInfo: ['Talenox Pte. Ltd.', 'Singapore', 'Nov 2022 to Feb 2022'],
      orgLogo: '/images/talenox_logo.png'
    },
    // Add more sections as needed
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-900 p-4">
      <h1 className="text-1xl md:text-1xl lg:text-4xl font-bold mb-12">my journey</h1>
      {internContent.map((content, index) => (
        <div key={index} className="mb-8">
          <AboutSection content={content} />
        </div>
      ))}
      {uniContent.map((content, index) => (
        <div key={index} className="mb-8">
          <AboutSection content={content} />
        </div>
      ))}
      {talenoxContent.map((content, index) => (
        <div key={index} className="mb-8">
          <AboutSection content={content} />
        </div>
      ))}
    </div>
  );
}

export default About;
