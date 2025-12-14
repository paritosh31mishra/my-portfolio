import { createBrowserRouter } from "react-router-dom";
import PortfolioLayout from "./components/portfolio-layout";
import { AboutSection } from './components/sections/about-section';
import { ResumeSection } from './components/sections/resume-section';
import { ContactSection } from './components/sections/contact-section';
import { GallerySection } from './components/sections/gallery-section';
import { PortfolioSection } from './components/sections/portfolio-section';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLayout />,
    children: [
      { index: true, element: <AboutSection /> },
      { path: "about", element: <AboutSection /> },
      { path: "resume", element: <ResumeSection /> },
      { path: "portfolio", element: <PortfolioSection /> },
    //   { path: "contact", element: <ContactSection /> },
    //   { path: "gallery", element: <GallerySection /> },
    ],
  },
]);
