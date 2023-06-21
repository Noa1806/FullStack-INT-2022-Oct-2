import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import ErrorPage from './pages/ErrorPage.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';
import ProjectDetails from './pages/ProjectDetails.tsx';
import FeedbackForm from './pages/Feedback.tsx';


export const Router = ()=>(
  <Routes>
    <Route path={"/"} element={<App />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="*" element={<ErrorPage />}/>
    <Route path="/projects/:_id" element={<ProjectDetails />}/>
    <Route path="/feedback" element={<FeedbackForm />}/>
  </Routes>
  );
  


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
  <Router />
  </BrowserRouter>
</React.StrictMode>
);
