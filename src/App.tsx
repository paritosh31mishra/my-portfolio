import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

const App = () =>{
  return (
    <RouterProvider router={router} />
  )
}
export default App;





  // import PortfolioLayout from './components/portfolio-layout';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { AboutSection } from './components/sections/about-section';
// import { ResumeSection } from './components/sections/resume-section';
// import { ContactSection } from './components/sections/contact-section';
// import { GallerySection } from './components/sections/gallery-section';
// import { PortfolioSection } from './components/sections/portfolio-section';
// function App() {
//   // return <PortfolioLayout />
//   return (
//     <Router>
//       {/* <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav> */}  
//       <Routes>
//         <Route path="/" element={<PortfolioLayout />} />
//         <Route path="/about" element={<AboutSection />} />
//         <Route path="/resume" element={<ResumeSection />} />
//         <Route path="/contact" element={<ContactSection />} />
//         <Route path="/gallery" element={<GallerySection />} />
//         <Route path="/portfolio" element={<PortfolioSection />} />
//       </Routes>
//     </Router>
//   )
// }