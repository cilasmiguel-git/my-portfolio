import React from 'react'
import port1 from '../assets/portifolio/port1.png'
import embreve from '../assets/portifolio/embreve.jpg'

const Portfolios = () => {

    const portfolios = [
        {
            id: 1,
            src: port1,
            demo: 'https://cilasmiguel-git.github.io/apple-mart/',
            code: 'https://github.com/cilasmiguel-git/apple-mart.git'
        },
        {
            id: 2,
            src: embreve,
            demo: 'https://www.google.com/',
            code: 'https://github.com/cilasmiguel-git/Chat-Simples-com-Socket-'
        },
        {
            id: 3,
            src: embreve,
            demo: 'https://www.google.com/',
            code: 'https://www.google.com/'
        },
        {
            id: 4,
            src: embreve,
            demo: 'https://www.google.com/',
            code: 'https://www.google.com/'
        }
    ]

    return (
        <div className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full '>
            <div className='max-w-screen-lg p-2 sm:p-14 md:p-14 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here.🚀👨🏽‍💻</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 sm:px-8 mb-36'>
                    {portfolios.map(({ id, src, code, demo }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="image" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <a href={demo}><button className='w-1/2 px-6 md:p-2 py-3 m-4 duraton-200 hover:scale-105'>Demo</button></a>
                                <a href={code}><button className='w-1/2 px-6 md:p-2 py-3 m-4 duraton-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolios