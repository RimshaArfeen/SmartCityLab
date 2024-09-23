import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import Main from './Components/Main/Main'
import Content from './Components/Content/Content'
import Tech from './Components/Technologies/Tech'
import Team from './Components/Team/Team'
import AcademicCollab from './Components/AcadCollab/AcademicCollab'
import IndusCollab from './Components/IndusCollab/IndusCollab'
import Footer from './Components/Footer/Footer'
import Products from './Components/OurProducts/Products'
import WorkShops from './Components/Workshops/WorkShops'
import Projects from './Components/Projects/Projects'
import Courses from './Components/Courses/Courses'
import vecteezy_robot2 from "../src/Components/Imgs/vecteezy_robot2.jpg"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Components/Blogs/Blog' 
import VisitSlider from './Components/visit/VisitSlider'
import Contact from './Components/ContactUs/Contact'
import ParentElement from './Components/Blogs/ParentElement'
import Webinars from './Components/Webinars/Webinars'
import Services from './Components/Services/Services'
import News from './Components/News/News'
import Events from './Components/Events/Events'
import Nav2 from './Components/Nav2/Nav2'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="bgImg ">
            <img src={vecteezy_robot2} alt="" className='' />
          </div>
          <Navbar />
          <Nav2 />
          <Main />
          <Content />
          <Tech />
          <AcademicCollab />
          <IndusCollab />
          <Footer />
        </>
      ),
    },
    {
      path: "/content",
      element: (
        <>
          <Navbar />
          <Nav2 />
          <Content />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <Content />
          <Footer />
        </>
      ),
    },
    {
      path: "/researchAreas/projects",
      element: (
        <>
          <Navbar />
          <Nav2 />
          <Projects />
          <Footer />
        </>
      ),
    },
    {
      path: "/about/blogs",
      element: (
        <>
          <Navbar />
          <ParentElement />
          <Footer />
        </>
      ),
    },
    {
      path: "/about/team",
      element: (
        <>
          <Navbar />
          <Team />
          <Footer />
        </>
      ),
    },
    {
      path: "/weOffer/products",
      element: (
        <>
          <Navbar />
          <Products />
          <Footer />
        </>
      ),
    },
    {
      path: "/weOffer/competence/workshops",
      element: (
        <>
          <div className='bg-gray-100 h-fit relative'>
            <Navbar />
            <WorkShops />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/weOffer/services",
      element: (
        <>
          <div className='bg-gray-100 h-fit relative'>
            <Navbar />
            <Services />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/weOffer/competence/courses",
      element: (
        <>
          <Navbar />
          <Courses />
          <Footer />
        </>
      ),
    },
    {
      path: "/weOffer/competence/webinars",
      element: (
        <div>
          <Navbar />
          <Webinars />
          <Footer />
        </div>
      ),
    },
    {
      path: "/newsAndEvents/news",
      element: (
        <>
          <Navbar />
          <News />
          <Footer />
        </>
      ),
    },
    {
      path: "/newsAndEvents/events",
      element: (
        <>
          <Navbar />
          <Events />
          <Footer />
        </>
      ),
    },
    {
      path: "/newsAndEvents/visits",
      element: (
        <>
          <Navbar />
          <VisitSlider />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <div className='ImgMap '>
            <Navbar />
            <Contact />
            <Footer />
          </div>
        </>
      ),
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
