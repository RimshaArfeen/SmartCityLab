import React, { useState } from 'react';
import PrecisionAgricultureImage from "../Imgs/InFocus/precision_agriculture.jpg";
import SmartHealthCareImage from "../Imgs/InFocus/smart_healthcare.jpg";
import IoTImage from "../Imgs/InFocus/IOT.jpg";
import RoboticsImage from "../Imgs/InFocus/robotics.jpg";
import IntelligentTransportImage from "../Imgs/InFocus/intelligent_transport.jpg";
import SocialandEnvironmentImage from "../Imgs/InFocus/social&environmental_inovations.jpg";
import './Project.css'; // Assuming this file contains the flip-card styles

const Projects = () => {
  const [showCard, setShowCard] = useState(false); // Toggle state

  const handleButtonClick = () => {
    setShowCard(!showCard); // Toggle card visibility
  };

  return (
    <>
          <div className='h-32 md:h-[30vh] lg:h-24 w-full absolute -z-10 bg-blue-900 top-0'></div>

      <section className="text-gray-600 body-font">
        <div className="w-full mx-auto flex py-4 md:flex-row flex-col items-center relative  top-36 md:top-56 lg:top-28 ">
          

          <div id="parent-div" className=' w-full lg:w-5/6'>
            {/* Show Cards only when toggle is ON */}
            {showCard && (
              <>
                {/* Precision Agriculture Flip Card */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={PrecisionAgricultureImage} alt="Precision Agriculture" />
                    </div>
                    <div className="flip-card-back">
                      <h3>PRECISION AGRICULTURE</h3>
                      <p>
                        We have introduced the concept of sustainable and autonomous farms as
                        an attempt to deal with the growing demand for food. Our technologies
                        include robotic weed control, satellite imagery, smart irrigation, and
                        disease detection to make farming sustainable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Smart Healthcare Flip Card */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={SmartHealthCareImage} alt="Smart Healthcare" />
                    </div>
                    <div className="flip-card-back">
                      <h3>SMART HEALTHCARE</h3>
                      <p>
                        AI is transforming healthcare through decision support, image analysis,
                        and patient triage. We are developing disease prediction systems using
                        MRI and X-ray scans for efficient diagnosis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Robotics Flip Card */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={RoboticsImage} alt="Robotics" />
                    </div>
                    <div className="flip-card-back">
                      <h3>ROBOTICS</h3>
                      <p>
                        Robots are being widely used for various applications including security,
                        space exploration, and agriculture. We are developing weed-removing robots
                        and humanoids for the agricultural sector.
                      </p>
                    </div>
                  </div>
                </div>

                {/* IoT Flip Card */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={IoTImage} alt="IoT" />
                    </div>
                    <div className="flip-card-back">
                      <h3>INTELLIGENT-CYBER-PHYSICAL SYSTEMS (IoT)</h3>
                      <p>
                        We provide IoT solutions for home automation, industrial monitoring, and
                        smart navigation systems. Our focus is on gathering, displaying, and
                        storing data to enhance life globally.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intelligent Transport Flip Card */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={IntelligentTransportImage} alt="Intelligent Transport" />
                    </div>
                    <div className="flip-card-back">
                      <h3>INTELLIGENT TRANSPORT</h3>
                      <p>
                        AI is reshaping transportation through autonomous vehicles, AI-based traffic
                        management, and fleet management. Our scientists are developing ADAS devices
                        to enhance driver performance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social & Environmental Innovation Flip Card */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={SocialandEnvironmentImage} alt="Social & Environment Innovation" />
                    </div>
                    <div className="flip-card-back">
                      <h3>SOCIAL & ENVIRONMENT INNOVATION</h3>
                      <p>
                        Our 'AI for Social Good' projects aim to positively impact the planet by
                        promoting productive workspaces, a cleaner environment, and capacity building
                        of farming communities and youth.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Button to toggle card visibility */}
            <div className="flex justify-center mt-32">
              <button onClick={handleButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded">
                {showCard ? 'Hide Projects' : 'Show Projects'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
