
import './App.css'
import { NavLink } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingSvg from "../src/Components/Imgs/Spinner.svg"
import { useState, useEffect } from 'react'
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
import Projects from './Components/Projects/Projects'
import ResearchNav from './Components/ResearchNav'
import Competence from './Components/Competence/Competence'
import MediaNav from './Components/MediaNav'
import Visits from './Components/visit/Visits'
import Contact from './Components/ContactUs/Contact'
import ParentElement from './Components/Blogs/ParentElement'
import Parent from "./Components/InFocus/Parent"
import Services from './Components/Services/Services'
import News from './Components/News/News'
import Events from './Components/Events/Events'
import Nav2 from './Components/Nav2/Nav2'
import Mission from './Components/Mission/Mission'
import bgVideo from "./Components/BgVideo.mp4"
import Snapshots from './Components/Snapshots/Snapshots'
import Publications from './Components/Publications/Publications'
import Achievement from './Components/Achievements/Achievements'
import OfferNav from './Components/OfferNav'
import Precision from './Components/InFocus/Precision_agriculture'
import Smart_health from './Components/InFocus/Smart_healthcare'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  const [Loading, setLoading] = useState(true)
useEffect(() => {
 setTimeout(() => {
   setLoading(false)
 }, 1000);
}, [])


  const router = createBrowserRouter([

    //==== SMART CITY ============================
    //Front Page
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />

          <div className="relative">
            <div className="bgImg absolute top-0 left-0  md:h-full -z-10 w-full">
              <video autoPlay loop muted playsInline className="videoBg h-[70vh] md:h-screen  ">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Page Components */}
            <ScrollToTop />
            <Navbar />
            <div className='w-fit mx-auto text-gray-200 relative z-30 top-32 md:top-48 lg:top-24'>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center py-4 uppercase text-base gap-y-2 justify-around">
                <NavLink to="/" className="mr-5 transition-all duration-300 bg-[#0000005d] hover:cursor-pointer focus:text-white focus:bg-gray-700 hover:text-cyan-600  p-1 rounded-lg border-2 px-2 border-gray-700">our technology</NavLink>

                <NavLink to="/mission" className="mr-5 transition-all duration-300 bg-[#0000005d] hover:cursor-pointer focus:text-white focus:bg-gray-700 hover:text-cyan-600  p-1 rounded-lg border-2 px-2 border-gray-700">mission</NavLink>

                <NavLink to="/snapshots" className="mr-5 transition-all duration-300 bg-[#0000005d] hover:cursor-pointer focus:text-white focus:bg-gray-700 hover:text-cyan-600  p-1 rounded-lg border-2 px-2 border-gray-700">snapshots</NavLink>

                <NavLink to="/successStories" className="mr-5 transition-all duration-300 bg-[#0000005d] hover:cursor-pointer focus:text-white focus:bg-gray-700  hover:text-cyan-600  p-1 rounded-lg border-2 px-2 border-gray-700">success stories</NavLink>

                <NavLink to="/team" className="mr-5 transition-all duration-300 bg-[#0000005d] hover:cursor-pointer focus:text-white focus:bg-gray-700 hover:text-cyan-600  p-1 rounded-lg border-2 px-2 border-gray-700">Leaderships</NavLink>

                {/* <NavLink to="/nationalSolutions" className="mr-5 transition-all duration-300 bg-[#0000005d] hover:cursor-pointer focus:text-white focus:bg-gray-700 hover:text-cyan-600  p-1 rounded-lg border-2 px-2 border-gray-700">national solutions</NavLink> */}

              </nav>
            </div>
            <Main />
            <Content />
            <AboutUs />
            <Tech />


            <AcademicCollab />
            <IndusCollab />

            <Footer />
          </div>
        </>
      ),
    },
    //Content
    {
      path: "/content",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Nav2 />
          <Content />
          <Footer />
        </>
      ),
    },
    //Mission
    {
      path: "/mission",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Nav2 />
          <Mission />
          <Footer />
        </>
      ),
    },
    //Snapshots
    {
      path: "/snapshots",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Nav2 />
          <Snapshots />
          <Footer />
        </>
      ),
    },
    //About
    // {
    //   path: "/about",
    //   element: (
    //     <>
    //                <ScrollToTop />
    //       <Content />
    //       <Footer />
    //     </>
    //   ),
    // },
    //Leaderships
    {
      path: "/team",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Nav2 />
          <Team />
          <Footer />
        </>
      ),
    },
    //Success Stories
    {
      path: "/successStories",
      element: (
        <>
          <ScrollToTop />
          <Navbar />

          <Achievement />
          <Footer />
        </>
      ),
    },

    // ========================================================================

    //========== RESEARCH AND PROGRAMS ==========
    //Projects
    {
      path: "/research/projects",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <ResearchNav />
          <Projects />
          <Footer />
        </>
      ),
    },
    //inFocus
    {
      path: "/research/inFocus",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <ResearchNav />
          <Parent />
          <Footer />
        </>
      ),
    },
    //Competence Development Programs
    {
      path: "/research/programs",
      element: (
        <div>
          <ScrollToTop />
          <Navbar />
          <ResearchNav />
          <Competence />
          <Footer />
        </div>
      ),
    },

    //Publications
    {
      path: "/research/publications",
      element: (
        <>

          <ScrollToTop />
          <Navbar />
          <ResearchNav />
          <Publications />
          <Footer />

        </>
      ),
    },

    //============================Offering==============
    //Blogs
    {
      path: "/offer/blogs",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <OfferNav />
          <ParentElement />
          <Footer />
        </>
      ),
    },

    //Products
    {
      path: "/offer/products",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <OfferNav />
          <Products />
          <Footer />
        </>
      ),
    },
    //==============================
    ///---------------------------------------------
    //Agriculture
    {
      path: "/research/inFocus/agriculture",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <ResearchNav />
          <Precision />
          <Footer />
        </>
      ),
    },
    // Smart healthcare
    {
      path: "/research/inFocus/healthcare",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <ResearchNav />
          <Smart_health />
          <Footer />
        </>
      ),
    },

    //
    ///---------------------------------------------


    // ===================== ENGAGEMENT AND MEDIA =========================
    //News
    {
      path: "/media/news",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <MediaNav />
          <News />
          <Footer />
        </>
      ),
    },
    //Events
    {
      path: "/media/events",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <MediaNav />
          <Events />
          <Footer />
        </>
      ),
    },
    //Visits
    {
      path: "/media/visits",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <MediaNav />
          <Visits />
          <Footer />
        </>
      ),
    },
    //Services
    {
      path: "/media/services",
      element: (
        <>
          <div className='bg-gray-100 h-fit relative'>
            <ScrollToTop />
            <Navbar />
            <MediaNav />
            <Services />
            <Footer />
          </div>
        </>
      ),
    },
    // =================================

    //Contact
    {
      path: "/contact",
      element: (
        <>

          <ScrollToTop />
          <Navbar />
          <Contact />
          <Footer />

        </>
      ),
    }
  ]);

  return (
    <>
{Loading && (
  <div className=' w-full h-screen flex justify-center items-center' ><img src={LoadingSvg} alt="" className=' w-28 h-28 bg-gray-400' /></div>

)
}
{!Loading && (

      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
)}

  
    </>
  );
}

export default App;
