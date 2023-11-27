import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className="max-w-screem-lg p-2 sm:p-14 md:p-24 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className='text-xl mt-20 '>
          Sou um programador, com forte interesse e aptidão para o desenvolvimento de software. Possuo conhecimento em linguagens de programação como Java, Python, php e JavaScript, além de experiência com bibliotecas e frameworks populares.
        </p>
        <br />
        <p className='text-xl'>
          Estou sempre em busca de aprender e me atualizar, acompanhanho as novas tendências e tecnologias.Possuo habilidades de comunicação e trabalho em equipe, além de forte capacidade de aprendizado e resolução de problemas. Busco oportunidades para colocar em prática meus conhecimentos e desenvolver minhas habilidades como programador.
        </p>
      </div>
    </div>
  )
}

export default About