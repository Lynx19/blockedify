import React from 'react';
import webinarImage from '../assets/webinar.avif';
import courses from '../assets/courses.png';
import community from '../assets/community.jpg';
import certified from '../assets/certified.jpg';
import resource from '../assets/crypto.jpg';

const Services = () => {
  const services = [
    {
      title: "Expert-led webinars",
      description: "We host expert-led webinars on blockchain, offering insights and keeping our community updated on industry trends and knowledge.",
      bgImage: webinarImage
    },
    {
      title: "Comprehensive courses",
      description: "Our courses span blockchain basics to advanced topics like smart contracts, DeFi, and NFTs. Designed for practical application, they blend engagement with comprehensive learning.",
      bgImage: courses
    },
    {
      title: "Community engagement",
      description: "BlockEdify is more than just an educational platform; it's a community. We encourage collaboration, networking, and the exchange of ideas among our members.",
      bgImage: community
    },
    {
      title: "Certification programs",
      description: "Earn industry-recognized certifications by completing our courses and passing assessments. Validate your skills and boost your credibility and career prospects in blockchain.",
      bgImage: certified
    },
    {
      title: "Learning tools and resources",
      description: "We provide a wealth of resources, including articles, whitepapers, research reports, and tools that can help you deepen your understanding of blockchain technology.",
      bgImage: resource
    }
  ];

  return (
    <div id="#companies" className="container mx-auto p-4 pt-8">
      <div className="text-center my-4">
        <h2 className="text-4xl font-bold">
          We <span className="text-indigo-400">Offer</span> You!
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center p-6 rounded-lg shadow-lg text-white flex items-center justify-center"
            style={{ backgroundImage: `url(${service.bgImage})`, height: '300px' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className=" text-justify">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
