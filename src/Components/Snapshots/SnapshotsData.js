//Organization Info icons
import Status from "../Imgs/SnapIcons/statusIcon.png"
import Director from "../Imgs/SnapIcons/Director.png"
import Calendar from "../Imgs/SnapIcons/calendar.png"
import Headquarter from "../Imgs/SnapIcons/Headquarter.png"

//Research Centers Icons
import Agriculture from "../Imgs/SnapIcons/leaf.png"
import Healthcare from "../Imgs/SnapIcons/heart-rate.png"
import Robotics from "../Imgs/SnapIcons/robot.png"
import Transport from "../Imgs/SnapIcons/Transport.png"
import IotImg from "../Imgs/SnapIcons/Iot.png"
import Innovation from "../Imgs/SnapIcons/innovation.png"

//Research Centers links
import  intelligent  from "../InFocus/Intelligent_transport"
import Iot from "../InFocus/IoT"
import Precision from "../InFocus/Precision_agriculture" 
import Robotic from "../InFocus/Robotics"
import Smart_health from "../InFocus/Smart_healthcare"
import Social_environment from "../InFocus/Social_environment_inovation"


export const  SnapData =

[
    {
        value:"3",
        css: "fade-right",
        heading: "Key Economic Sectors",
        description: "Driving innovation across vital industries.",
        imgUrl: "ri-shield-keyhole-line"
      },
      {
        value:"50",
        css: "fade-down",
        heading: "Research Experts",
        description: "Dedicated professionals leading the charge in cutting-edge research.",
        imgUrl: "ri-survey-line"
      },
      { 
        value:"2",
        css: "fade-left",
        heading: "Advanced Laboratories",
        description: "Situated at NED University of Engineering & Technology.",
        imgUrl: "ri-test-tube-line"
      }
]
export const organizationInfo = [
    {
      heading: "Status",
      description: "Public Scientific and Technological Establishment (EPST)",
      imgUrl: Status
    },
    {
      heading: "Director",
      description: "Dr. Muhammad Khurram",
      imgUrl:Director
    },
    {
      heading: "Headquarters",
      description: "NED University of Engineering and Technology, Karachi, Sindh",
      imgUrl: Headquarter
    },
  ];

export  const researchFields = [
    {
      title: "Precision Agriculture",
      imgUrl: Agriculture,
      link:"/research/inFocus"
    },
    {
      title: "Smart Healthcare",
      imgUrl: Healthcare,
      link: "/research/inFocus"
    },
    {
      title: "Robotics",
      imgUrl: Robotics,
      link: "/research/inFocus"
    },
    {
      title: "Intelligent Cyber-Physical Systems - IoT",
      imgUrl: IotImg,
      link: "/research/inFocus"
    },
    {
      title: "Intelligent Transport",
      imgUrl: Transport,
      link: "/research/inFocus"
    },
    {
      title: "Social and Environment Innovation",
      imgUrl: Innovation,
      link:"/research/inFocus"
    }
  ];
  