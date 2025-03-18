import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or check for actual resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="w-full overflow-hidden">
        <Header />
        <About />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
