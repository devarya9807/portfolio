// src/components/Home.jsx
import React, { useEffect, useState } from 'react';

const Home = () => {

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [currentText1, setCurrentText1] = useState('');
  const [currentIndex1, setCurrentIndex1] = useState(0);

  const text="I'm Devendra, a passionate Software Engineer.";
  const text1="Welcome to My Portfolio";
  const delay=30;
  const infinite=true;

  useEffect(() => {
    let timeout;

    if (currentIndex1 < text1.length) {
      setTimeout(() => {
        setCurrentText1(currentText1 + text1[currentIndex1]);
        setCurrentIndex1(currentIndex1 + 1);
      }, delay);

    }
    else if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } 
    // else if (infinite) { // ADD THIS CHECK
    //   setTimeout(() => {
    //     setCurrentIndex(0);
    //     setCurrentText('');
    //   }, 3000);
      
    // }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text,text1,currentIndex1]);

  return (
    <header className="jumbotron jumbotron-fluid bg-primary text-white text-center ">
      <div className="container auto-show">
        <h1 className="display-4">{currentText1}</h1>
        <p className="lead">{currentText}</p>
      </div>
    </header>
  );
};

export default Home;
