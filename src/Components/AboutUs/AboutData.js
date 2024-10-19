
import tech from "../Imgs/SnapIcons/innovation.png" 
import business from "../Imgs/MissionIcons/business.png"
import descision_making from "../Imgs/SnapIcons/statusIcon.png"

import newsVid from "../Imgs/Miscellaneous/newsImg.jpg"
import Research from "../Imgs/Miscellaneous/ResearchImg.jpg" 
import Articles from "../Imgs/Miscellaneous/ArticlesImg.png"
import Products from "../Imgs/Miscellaneous/ProductsImg.jpg"


 export const Data = [
    { 
      title: "State-of-the-art Technology and Smart Solutions",
      description: "Utilizing cutting-edge technology like AI, IoT, and smart infrastructure to create innovative solutions for modern urban challenges.",
      imgUrl: tech,
      linkText: "Learn More",
      linkUrl: "#"
    }, 
    {
      title: "Sustainable Urban Development",
      description: "Focusing on eco-friendly technologies and strategies to promote greener, more efficient city infrastructure that minimizes environmental impact.",
      imgUrl: business,
      linkText: "Learn More",
      linkUrl: "#"
    },
    {
      title: "Data-Driven Decision Making",
      description: "Leveraging big data and analytics to inform urban planning, optimize resources, and improve the quality of life in smart cities.",
      imgUrl: descision_making,
      linkText: "Learn More",
      linkUrl: "#"
    }
  ];


 export const moreAbout = [
    {
      title: "News",
      css: "fade-up",
      link: '/newsAndEvents/news',
      imgUrl: newsVid
    },
    {
      title: "Research Areas",
      imgUrl: Research,
      bgColor: "bg-indigo-100",
      css: "fade-up",
      link: "/researchAreas/projects",
    },
    {
      title: "Products",
      css: "fade-down",
      link: "/weOffer/products",
      imgUrl: Products
    },
    {
      title: "Articles",
      css: "fade-down",
      imgUrl: Articles,
      link: "/acheivements/publications",
    }
  ];
