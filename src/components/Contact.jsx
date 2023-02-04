import React from 'react'

const Contact = () => {
  return (
    <div className="md:pt-8 w-full h-full bg-gradient-to-b from-black to-gray-800 p-8 text-white" name="contact">
        <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full" >
            <div  className="pb-2 ">
                <p  className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className='py-6'>Submit the form below to get in touch wich me</p>
            </div>
            <div className="flex justify-center items-center ">
                <form method='POST' action="https://getform.io/f/491f06d6-9c60-4a01-9f96-651253d3ded8" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-3 py-3 my-3 mx-auto flex items-center rounded-md hover-scale-118 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact