
import './App.css'
import { NavLink } from 'react-router-dom'
import ScrollToTop from './Components/Scroll'
import Acheievements from "./Components/Achievements/Achievements"
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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
function App() {
  const router = createBrowserRouter([

    //==== SMART CITY ============================
    //Front Page
    {
      path: "/",
      element: (
        <>
          <div className="relative">
            <div className="bgImg absolute top-0 left-0  md:h-full -z-10 w-full">
              <video autoPlay loop muted playsInline className="videoBg h-[70vh] md:h-auto  ">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Page Components */}
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
    //       <Navbar />
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
          <Navbar />

          <Achievement/>
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
          <Navbar />
          <ResearchNav />
          <Projects />
          <Footer />
        </>
      ),
    },
    {
      path: "/research/inFocus",
      element: (
        <>
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

          <Navbar />
          <ResearchNav />
          <Publications />
          <Footer />

        </>
      ),
    },
    //Blogs
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

    //Products
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


    // ===================== ENGAGEMENT AND MEDIA =========================
    //News
    {
      path: "/media/news",
      element: (
        <>
          <Navbar />
          <MediaNav/>
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
          <Navbar />
          <MediaNav/>
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
          <Navbar />
          <MediaNav/>
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
            <Navbar />
            <MediaNav/>
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

      <RouterProvider router={router}>
        <ScrollToTop />
        {/* Rest of your components */}
      </RouterProvider>
    </>
  );
}

export default App;
