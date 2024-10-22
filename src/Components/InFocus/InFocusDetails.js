import PrecisionAgricultureImage from "../Imgs/InFocus/precision_agriculture.jpg";
import SmartHealthCareImage from "../Imgs/InFocus/smart_healthcare.jpg";
import IoTImage from "../Imgs/InFocus/IOT.jpg";
import RoboticsImage from "../Imgs/InFocus/robotics.jpg";
import IntelligentTransportImage from "../Imgs/InFocus/intelligent_transport.jpg";
import SocialandEnvironmentImage from "../Imgs/InFocus/social&environmental_inovations.jpg";
import AquaAgroImage from "../Imgs/InFocus/aquaagro.png";
import EvaporationImage from "../Imgs/InFocus/evaporation.png";
import RiceAnalyzerImage from "../Imgs/InFocus/riceanaluzer.png";
import OxygenMonitoringImage from "../Imgs/InFocus/oxygenmonitoring.png";
import HomeAutomationImage from "../Imgs/InFocus/homeautomation.png";
// import WSMImage from "../Imgs/InFocus/wsm.png";
import GPSImage from "../Imgs/InFocus/gps.jpg";
// import RoboImage from "../Imgs/InFocus/robo.png";
import DicomImage from "../Imgs/InFocus/dicom.jpg";
import SleepImage from "../Imgs/InFocus/sleep.jpg";
import SurgeryImage from "../Imgs/InFocus/surgery.jpg";
import ITImage from "../Imgs/InFocus/it.jpg";
import AVImage from "../Imgs/InFocus/av.jpg";
// import AANSImage from "../Imgs/InFocus/aans.jpg";
import AgroImage from "../Imgs/InFocus/agro.jpg";
import UserImage from "../Imgs/InFocus/user.jpg";
import RVMImage from "../Imgs/InFocus/rvm.jpg";
// import GreenImage from "../Imgs/InFocus/greenarea.jpg";
import FarmerImage from "../Imgs/InFocus/farmer.jpg";
import CtcImage from "../Imgs/InFocus/ctc.jpg";
import AIImage from "../Imgs/InFocus/ai.jpg";


export const categories = [
    {
      title: 'Precision_agriculture',
      imgUrl: PrecisionAgricultureImage, 
    },
    {
      title: 'IoT',
      imgUrl: IoTImage,
    },
    {
      title: 'Smart_healthcare',
      imgUrl: SmartHealthCareImage,
    },
    {
      title: 'Intelligent_transport',
      imgUrl: IntelligentTransportImage,
    },
    {
      title: 'Robotics',
      imgUrl: RoboticsImage,
    },
    {
      title: 'Social_environment_inovation',
      imgUrl:  SocialandEnvironmentImage,
    },
  ];
  

  // Precision_agriculture Category
export const Precision_agriculture = [
  {
    title: "Aqua Agro",
    date: "26th",
    month: "July",
    year: 2019,
    description: "Pakistan’ s first Agri-data platform, that provides sustainable and smart Irrigation Solution. The system uses IoT, AI, and ML techniques to provide farmers with predictive insights on the ideal watering schedule for their crops based on the seasons, soil type, and crop growth stage. The technology offers high precision watering while being easy to use. After 3 years of rigorous research conducted in affiliation with the German Research Centre for Artificial Intelligence, on several agricultural farms; the solution enabled farmers to achieve a 20% increase in quality yield with 50% water conservation potential.",
    imgUrl: AquaAgroImage,
    category: "Precision_agriculture"
  },
  {
    title: "EVAPOTRANSPIRATION",
    date: "26th",
    month: "July",
    year: 2019,
    description: "There are many things that affect the evapotranspiration rate including temperature, humidity, soil type, wind, and plant type. As more water is lost to evapotranspiration, more must be delivered through irrigation systems to satisfy plant needs. This project aimed to predict accurate amounts of water required by plants to avoid overwatering or underwatering. The study was conducted by using data collected through soil probes, deployed on the farm for over a period of one year. With the help of the dataset an intelligent machine learning model was developed to predict ET value.",
    imgUrl: EvaporationImage, 
    category: "Precision_agriculture"
  },
  {
    title: "Rice Quality Analyzer",
    date: "26th",
    month: "July",
    year: 2019,
    description: "The RCAI has developed a solution named Grain Scan that can reliably identify the length, width of the rice, Broken rice percentage, Total weight of the sample whereas our solution also detects the Chalky and yellow grains as well as their weighted Percentages.",
    imgUrl: RiceAnalyzerImage,
    category: "Precision_agriculture"
  },
  {
    title: "AANS",
    date: "26th",
    month: "July",
    year: 2019,
    description: "The RCAI has developed a solution named Grain Scan that can reliably identify the length, width of the rice, Broken rice percentage, Total weight of the sample whereas our solution also detects the Chalky and yellow grains as well as their weighted Percentages.",
    imgUrl: "AANSImage",
    category: "Precision_agriculture"
  },
  {
    title: "Agro-Living Lab",
    date: "26th",
    month: "July",
    year: 2019,
    description: "Living labs aim to develop new knowledge, practices, products, and machinery through creative processes involving users through real-life testing and information sharing. Our Ag-tech lab aims to enhance seed and crop production, irrigation management, organic agriculture and agriculture commodity trading using big data and decision support, IoT, smart agricultural machinery and smart supply chain management. Our recent research activity is aimed toward analysis and optimization of conventional furrow irrigation systems using the WinSRFR simulation model.",
    imgUrl: AgroImage,
    category: "Precision_agriculture"
  }
];

//   IoT Category
 export const IoT = [
  {
    title: "Oxygen monitoring",
    date: "26th",
    month: "July",
    year: 2019,
    description: "With the help of a compact wireless telemetry device, the oxygen monitoring online solution transforms an analog or digital input from sensors into actionable data. Depending on the type of sensor, several algorithms are applied to turn the data into information that may be used. Following that, the data is routinely transmitted to the device’s Cloud in accordance with the specified interval. Generate alerts via Email or SMS. The various enclosures that we offer have various certifications such as IP65, IP67, IEEC and AT EX. The device contains a magnetic mounting option also and has two power options: solar power with battery backup or mains supply (l IOV/220V).",
     imgUrl: OxygenMonitoringImage,
     category: "IoT"
   },
  {
    title: "Home Automation",
    date: "26th",
    month: "July",
    year: 2019,
    description: "The Internet of Things (IoT) is transforming our homes into smart ones. Home automation is a concept that intends to give users access to affordable lighting options, improved energy efficiency by bringing auto control of operating common household electrical appliances. We are developing the best and most dependable home automation technology in Pakistan.",
     imgUrl: HomeAutomationImage,
     category: "IoT"
   },
  {
    title: "WSN for water resources management",
    date: "26th",
    month: "July",
    year: 2019,
    description: "The depleting state of Pakistan's water resources, necessitates rigorous and effective monitoring of water use in industries and agricultural operations. We have developed a system using Wireless sensor networks that are used to measure environmental conditions such as temperature, sound, pollution levels, humidity and wind, and can be used to conserve water by monitoring and allocating water resources according to weather, soil and humidity conditions. As well as providing clean water by detecting pollutants and planning further sanitation actions.",
     imgUrl: "WSMImage",
     category: "IoT"
   },
  {
    title: "PINS",
    date: "26th",
    month: "July",
    year: 2019,
    description: "The use of the Global Positioning System (GPS) has been a success for locating an object in an outdoor environment, but indoor positioning has been impractical when using this technology. We have developed an indoor positioning system utilising short-range Ultra Wide Band (UWB) technology with Time of Flight, Time Difference of Arrival, and Phase difference of Arrival methods for precise ranging applications. The Indoor Positioning System (IPS) is found to effectively locate the dynamic object in three-dimensional space within an error rate of +/−0.07m.",
     imgUrl: GPSImage,
     category: "IoT"
   }
 ];

   // Robotics Category
export const Robotics = [
  {
    title: "RoboMan",
    date: "26th",
    month: "July",
    year: 2019,
    description: "For an economy like Pakistan to excel in robotics and especially humanoid robotics becomes very difficult since many universities, companies, and research labs don't have the resources to afford the hardware. RoboMan is a human-size 3d printed robot. Smart City Lab is part of the global team working on this project. The idea is to make a low cost humanoid robot development kit for researchers, students, and enthusiasts who intend to explore this field.",
    imgUrl: "RoboImage",
    category: "Robotics"
  }
];

   // intelligent_transport Category 
   export const Intelligent_transport =[
    {
      title: "ADAS",
      date: "26th",
      month: "July",  
      year: 2019,
      description: "The majority of road vehicles in underdeveloped nations, particularly Pakistan, lack cutting-edge embedded computing and processing systems for ADAS modules like Front Collision Warning (FCW) and Lane Departure Warning (LDR). We have built a lightweight Deep Learning model that can operate on hardware with limited computational power and deliver good accuracy in real time.",
      imgUrl: ITImage,
      category: "Intelligent_transport"
    },
    {
      title: "AV NAVIGATION",
      date: "26th",
      month: "July",
      year: 2019,
      description: "With the development of automotive simulation technologies, it is now possible to thoroughly test and evaluate AV designs without running the risk of putting actual users in danger. In order to navigate autonomous vehicles, we employed HD (High Definition) maps and a ROS interface that was integrated with the CARLA (CAR Learning to Act) simulator",
      imgUrl: AVImage,
      category: "Intelligent_transport"
    }
  
  ];


  // Smart_healthcare Category
  export const Smart_healthcare = [
    {
      title: "DICOM",
      date: "26th",
      month: "July",
      year: 2019,
      description: "Doppler assessment of the placental circulation plays an important role in screening for impaired placentation and its complications of pre-eclampsia, intrauterine growth restriction and perinatal death. Only in the third trimester diagnosis of IUGR be possible and eventually confirmed at birth according to accepted clinical practice. We have built a simple and user-friendly program on MATLAB, along with its image processing toolbox to process multiple DICOM files and generate respective csv files for further computation and building machine learning models for mortality rate prediction.",
      imgUrl: DicomImage,
      category: "Smart_healthcare"
    },
    {
      title: "Diagnosing sleep disorders",
      date: "26th",
      month: "July",
      year: 2019,
      description: "DOT’s objective is to develop a platform that is capable of producing reports for diagnosing sleep disorders using EEG Signal Processing and other biometrics found in the EDF files. We have developed a platform that is capable of converting EDF files into legible reports for a physician to be able to diagnose Sleep Apnea and other disorders, detailed values of Sleep Duration, Sleep Architecture, Latency, Continuity, fp1, fp2, Theta, Alpha, Beta and Delta waves per patient profile. Accuracy of diagnosis will be greater than 85%. Platform would be seamlessly connected for all the stakeholders; patient, analyst and doctor.",
      imgUrl: SleepImage,
      category: "Smart_healthcare"
    },
    {
      title: "Surgical Site Infections",
      date: "26th",
      month: "July",
      year: 2019,
      description: "Surgical infections are developed at the site of a surgical procedure. They can be superficial or deep, requiring rigorous treatment. Hence surveillance and monitoring to identify and track procedure-associated infections is crucial. The study concentrated on individuals who underwent general surgery operations from tertiary care institutes. A ML model was created to predict the type of SSI and the postoperative week, as well as comparing risk variables for superficial and deep SSIs after a variety of surgical operations. Among six ML algorithms that were trained as predictors of infection type , XG boost univariate model had the highest accuracy of 0.85 % for predicting type of SSI.",
      imgUrl: SurgeryImage,
      category: "Smart_healthcare"
    }
  ];
    // Social_environment_inovation Category
  export const Social_environment_inovation = [
    {
      title: "User Engagement Prediction",
      date: "26th",
      month: "July",
      year: 2019,
      description: "Employee engagement is crucial for businesses as it generates customer loyalty, promotes talent retention, enhances organisational performance and stakeholder value. A Machine Learning based rate prediction and theme classification system, is developed to improve employee engagement at the workplace. Using social media as a tool, which is an efficient and easy source of increasing engagement between communities, this system will help organisations and managers to improve emotional connection between employees in order to increase productivity. By rating and classifying posts generated on the social media platform, managers can identify high rating posts, promote them and take actions accordingly, to increase engagement.",
      imgUrl: UserImage,
      category: "Social_environment_inovation"
    },
    {
      title: "RVM",
      date: "26th",
      month: "July",
      year: 2019,
      description: "RVM Reverse vending machine, as the name describes, is built on the concept where users insert plastic pet water bottles and through contact number entered by the user a QR code is generated via SMS. This QR code is entered in the RVM App to redeem points and get discounts. RVM is an attempt in sustaining the environment by taking action against climatic changes nowadays. In addition to being non nutritive and indigestible, plastics have been shown to concentrate pollutants. A simple water bottle takes 300 years to degrade. Despite all this,use of plastic in Pakistan increases by 15% every year. RVM will aid in the gathering of plastic that would otherwise be discarded somewhere harmful to the environment. After that, the bottles will be moved to be recycled.",
      imgUrl: RVMImage,
      category: "Social_environment_inovation"
    },
    {
      title: "Green Area Calculation",
      date: "26th",
      month: "July",
      year: 2019,
      description: "Green spaces improve air quality, reduce noise, and improve biodiversity. Karachi’s green spaces have shrunk to less than 4% of the city’s build-up area. The study was started to calculate the green spaces of six districts in Karachi using satellite imagery. NDVI values were used to calculate the density of the green area for a specific part of the land. At NDVI > 0.3, the findings showed that Karachi's green land cover changed from 6.30% in January 2014 to 11.28% in January 2021. Only a 5% increase over an eight-year period underscores the need for immediate action to enhance the amount and quality of urban green spaces in Karachi.",
      imgUrl: "GreenImage",
      category: "Social_environment_inovation"
    },
    {
      title: "Farmers Training",
      date: "26th",
      month: "July",
      year: 2019,
      description: "The aim of the social project was to empower farmers with cutting-edge agriculture solutions for sustainable yields and assist them in the creation of smart communities. The Smart Agricultural Education training model for rural farming communities was developed to work under the global initiative of the Food and Agriculture Organisation of the United Nations that captures the synergies between mitigation, adaptation, and food security.",
      imgUrl: FarmerImage,
      category: "Social_environment_inovation"
    },
    {
      title: "Connect 2 Collab",
      date: "26th",
      month: "July",
      year: 2019,
      description: "Youth employment is critical in many developing and transitional countries. A communication halt is created between learning and practice. We have developed a platform that will fill this gap by providing resources to the students and companies. Connect 2 collab community is creating opportunities for supporting career growth and enhancing employability through its internship leading to job programs.",
      imgUrl: CtcImage,
      category: "Social_environment_inovation"
    },
    {
      title: "AI Proctor",
      date: "26th",
      month: "July",
      year: 2019,
      description: "COVID-19-related school closings and work from home culture has disrupted education and work spaces all across the world. At these crucial times video conferencing applications become prominent. However these apps come with various issues such as choppy audio, a video feed that keeps freezing up, screen sharing failure and extended, unexplained delays. Hence remote monitoring of students and employees who are working from home is difficult. Our developed AI proctor oversees an exam and monitors students or employees during a formal assessment or during working hours. In case of violation of the code of conduct, the proctor reports it to the institution without delay.",
      imgUrl: AIImage,
      category: "Social_environment_inovation"
    }
  ];



