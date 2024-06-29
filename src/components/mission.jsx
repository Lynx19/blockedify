import React from 'react';
import rocket from "../assets/rocket.png"
import vision from "../assets/vision.png"
const Mission = () => {
  return (
    <div className="bg-white p-6 pt-0" >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Mission & Vision</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg">
          <div className="mb-4">
           <img src={rocket} alt="mission" width="70"/>
          </div>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To connect great organization to greater and professional personalities. We strive to
            deliver what we promised, from the first encounter to the later...
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg">
          <div className="mb-4">
            <img src={vision} alt="vision" width="80" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading partner that clients and candidates always choose to connect with. I can
            state with confidence that Famex team, is the team that serves you the talent and we are often
            driven by our mission to create economic opportunities for our people round the globe. We give an
            accurate training to our candidates to unveil and achieve an elongated trust and integrity as expected
            from our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
