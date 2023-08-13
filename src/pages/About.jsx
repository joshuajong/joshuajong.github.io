import React from 'react';
import AboutSection from '../components/AboutSection';

function About() {
  const internContent = [
    {
      jobTitle: 'Software Engineering Intern',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit.', 'Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit.', 'Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare',
      ],
      orgInfo: ['Talenox Pte. Ltd.', 'Singapore', 'Nov 2022 – Feb 2022'],
      orgLogo: '/images/talenox_logo.png'
    },
    // Add more sections as needed
  ];
  const uniContent = [
    {
      jobTitle: 'Tutor',
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',],
      orgInfo: ['Monash University', 'Malaysia', '(Date)'],
      orgLogo: '/images/monash_university_logo.svg'
    },
    // Add more sections as needed
  ];

  const talenoxContent = [
    {
      jobTitle: 'Software Engineer',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit. Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lorem eu scelerisque blandit. Cras tortor metus, vehicula et suscipit in, ultricies in nisl. Nam hendrerit imperdiet ornare',
      ],
      orgInfo: ['Talenox Pte. Ltd.', 'Singapore', 'Mar 2022 – present'],
      orgLogo: '/images/talenox_logo.png'
    },
    // Add more sections as needed
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-900 p-4">
      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">about me</h1>
      </div>
      {talenoxContent.map((content, index) => (
        <div key={index} className="mb-12">
          <AboutSection content={content} />
        </div>
      ))}

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
    </div>
  );
}

export default About;
