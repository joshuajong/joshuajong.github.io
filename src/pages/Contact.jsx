import React from 'react';
import ContactCard from '../components/ContactCard';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-4 ">
      <div className="mb-24 mt-24">
        <h1 className="text-2xl md:text-3xl lg:text-8xl">Contact me</h1>
      </div>
      <div className="flex space-x-12 md:space-x-16 lg:space-x-24">
        <ContactCard icon={FaEnvelope} userName="joshuajongsh@gmail.com" link="https://www.google.com" />
        <ContactCard icon={FaGithub} userName="@joshuajong" link="https://github.com/joshuajong" />
        <ContactCard icon={FaLinkedinIn} userName="LinkedIn" link="https://linkedin.com/in/joshua-shanho-jong" />
        <ContactCard icon={FaTwitter} userName="@joshuajong_" link="https://twitter.com/joshuajong_" />
      </div>
    </div>
  );
}

export default Contact;