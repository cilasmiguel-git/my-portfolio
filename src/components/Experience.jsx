import React from 'react'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind-css-logo.png'
import bootstrap from '../assets/bootstrap.png'
import node from '../assets/node-js.png'
import wordpress from '../assets/wordpress.png'
import php from '../assets/php.png'
import python from '../assets/python.png'

const Experience = () => {
  const techs = [
    {
      id:0,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:1,
      src:css,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:2,
      src:tailwind,
      title:'TAILWIND',
      style:'shadow-blue-400'
    },
    {
      id:3,
      src:js,
      title:'JAVASCRIPT',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:react,
      title:'REACT',
      style:'shadow-blue-600'
    },
    {
      id:5,
      src:bootstrap,
      title:'BOOTSTRAP',
      style:'shadow-purple-500'
    },
    {
      id:6,
      src:node,
      title:'NODE',
      style:'shadow-green-500'
    },
    {
      id:7,
      src:wordpress,
      title:'WORDPRESS',
      style:'shadow-blue-800'
    },
    {
      id:8,
      src:php,
      title:'PHP',
      style:'shadow-purple-300'
    },
    {
      id:9,
      src:python,
      title:'PYTHON',
      style:'shadow-yellow-600'
    },
  ]
  return (
    <div name="experience" className=' md:pb-6 bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className="pb-16 max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-5">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">these are the technologies i've studied wich</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 notranslate">
          {techs.map(({id,src,title,style})=>(
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience