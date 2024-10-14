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
// import vecteezy_robot2 from "../src/Components/Imgs/vecteezy_robot2.jpg"
// import Blog from './Components/Blogs/Blog'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Visits from './Components/visit/Visits'
import Contact from './Components/ContactUs/Contact'
import ParentElement from './Components/Blogs/ParentElement'
import Webinars from './Components/Webinars/Webinars'
import Services from './Components/Services/Services'
import News from './Components/News/News'
import Events from './Components/Events/Events'
import Nav2 from './Components/Nav2/Nav2'
import Mission from './Components/Mission/Mission'
import bgVideo from "./Components/BgVideo.mp4"
import Snapshots from './Components/Snapshots/Snapshots'
import Publications from './Components/Publications/Publications'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="relative">
          <div className="bgImg absolute top-0 left-0  md:h-full -z-10 w-full">
          <video autoPlay loop muted playsInline className="videoBg  ">
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

            {/* Page Components */}
            <Navbar />
            <Nav2 />
            <Main />
            <Content />
            <AboutUs/>
           <Tech/> 
          

           <AcademicCollab/>
           <IndusCollab/>
          
            <Footer />
</div>
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
      path: "/mission",
      element: (
        <>
          <Navbar />
          <Nav2 />
          <Mission />
          <Footer />
        </>
      ),
    },
    {
      path: "/snapshots",
      element: (
        <>
          <Navbar />
          <Nav2 />
          <Snapshots/>
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
          <Visits/>
          <Footer />
        </>
      ),
    },
    {
      path: "/acheivements/publications",
      element: (
        <>
         
            <Navbar />
            <Publications />
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
