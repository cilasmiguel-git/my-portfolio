import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Home = () => {

  const fullText = [
    "I'm a junior software developer with a passion for coding.",
    "My name is Cilas Miguel, and I'm excited about building innovative software solutions.",
    "I have a solid foundation in programming languages and technologies.",
    "I'm eager to learn and grow as a developer, constantly seeking new challenges.",
    ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const startTimeout = () => {
      timeout = setTimeout(() => {
        setText(fullText[index].substring(0, characterIndex + 1));
        setCharacterIndex(prevIndex => prevIndex + 1);
        if (characterIndex === fullText[index].length) {
          setTimeout(() => {
            setIndex(prevIndex => (prevIndex + 1) % fullText.length);
            setCharacterIndex(0);
          }, 2000);
        } else {
          startTimeout();
        }
      }, 200);
    };
    startTimeout();
    return () => {
      clearTimeout(timeout);
    };
  }, [index, characterIndex, fullText]);

  return (
    <div name="home" id='container' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg p-0 sm:p-14 md:p-24 mx-auto flex flex-col items-center justify-center h-full sm:px-12 md:flex-row '>
        <div className='flex flex-col justify-center h-full w-8/12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white notranslate'>{text}<span className="pointer">|</span></h2>
          <p className='text-gray-500 py-3 max-w-md'>I am a full-stack junior developer with experience in web development using HTML, CSS, JavaScript, React, Bootstrap, and Node. I am familiar with PHP and WordPress, and have knowledge of Java, Python, C# and experience with relational and non-relational databases. I am always eager to learn and take on challenging projects.</p>
          <div><Link to='myprojects' className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group '>Portfolio<span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className="ml-1" /></span></Link></div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className='mb-6 md:rounded-2xl rounded-full mx-auto m-2/3  md:w-7/12 border-white border-2' />
        </div>
      </div>
    </div>
  )

}


export default Home