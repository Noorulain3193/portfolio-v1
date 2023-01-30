import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsChevronRight } from 'react-icons/bs';
import { RxReset } from 'react-icons/rx';
import avatar from './assets/avatar2.jpeg';
import QRCode from "react-qr-code";

function App() {
  const techs = [
    { title: 'Html', icon: 'https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white' },
    { title: 'css', icon: 'https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white' },
    { title: 'JavaScript', icon: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { title: 'react js', icon: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { title: 'redux', icon: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' },
    { title: 'next.js', icon: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" },
    { title: 'tailwind', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
    { title: 'bootstrap', icon: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white' },
    { title: 'semantic UI', icon: 'https://img.shields.io/badge/semantic%20ui%20react-35BDB2?style=for-the-badge&logo=semanticuireact&logoColor=white' },
  ];

  const contacts = [
    {
      title: 'Email',
      link: 'mailto:noor.ul.ain3193@gmail.com',
      icon: <AiTwotoneMail size={22} />
    },
    {
      title: 'Github',
      link: 'https://github.com/Noorulain3193',
      icon: <AiFillGithub size={22} />
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/noor-ul-ain3193/',
      icon: <AiFillLinkedin size={22} />
    },
  ];

  const projects = [
    {
      title: 'Today\'s Plan',
      description: 'A react project made with class based components.',
      link: 'https://github.com/Noorulain3193/todays_plan'
    },
    {
      title: 'Digital Clock',
      description: 'A simple and quick project.',
      link: 'https://github.com/Noorulain3193/digital_clock'
    },
    {
      title: 'Seasons',
      description: 'A beautiful app created in React.js for determining the seasons across the world.',
      link: 'https://github.com/Noorulain3193/seasons'
    },
  ]

  const [selectedProject, setSelectedProject] = useState(0);


  const nextOrReset = () => {
    if (selectedProject + 1 > projects.length - 1) {
      setSelectedProject(0);
    } else {
      setSelectedProject(selectedProject + 1);
    }
  }

  return (
    <div className='flex items-center justify-between w-full flex-wrap sm:pb-20 md:pb-20 lg:pb-0'>
      <div className="lg:pr-32 sm:h-auto md:h-auto lg:h-screen transition-all duration-300 sm:w-full md:w-full lg:w-3/5 bg-neutral-800 flex flex-col justify-evenly p-10">
        <div className='flex items-center sm:mb-20 md:mb-20'>
          <div
            className='h-32 w-32 rounded-2xl overflow-hidden'
            style={{
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundImage: `url('${avatar}')`
            }}></div>
          <div className='px-10'>
            <h1 className='text-xl font-semibold text-gray-300 mb-1'>Hello! 👋 My name is </h1>
            <h1 className='text-5xl font-semibold text-gray-300 mb-1'>Noor Ul Ain</h1>
            <h1 className='text-2xl text-gray-400'>And I'm a <span className='line-through'>Doctor</span> Turned <span className='underline'>Frontend Developer</span></h1>
          </div>
        </div>
        <div className='sm:mb-20 md:mb-20'>
          <h1 className='font-semibold text-2xl text-gray-300 mb-4'>About Me</h1>
          <h1 className='text-gray-400 mb-4'>
            Left my residency in Anesthesiology to pursue my dream of becoming a Frontend Developer. In my free time I love to explore newer frontend tech and experimenting with different frontend frameworks.
          </h1>
          <div className='flex items-center justify-start flex-wrap'>
            {
              techs.map((t) => (
                <img src={t.icon} className="mr-4 mb-4" alt={t.title} />
              ))
            }
          </div>
        </div>
        <div className='sm:mb-20 md:mb-20'>
          <h1 className='font-semibold text-2xl text-gray-300 mb-4'>Reach out</h1>
          <div className='flex items-center justify-start'>
            {contacts.map((c) => (
              <a target={"_blank"} href={c.link} className='flex items-center text-white mr-10'>
                <span className='mr-2'>{c.icon}</span>
                <span className='text-sm'>{c.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:h-auto
      md:h-auto
      lg:h-screen
      transition-all
      duration-300
      sm:w-full
      md:w-full
      lg:w-2/5
      bg-neutral-900
      flex
      flex-col
      items-start
      justify-evenly
      ">
        <h1 className='p-20 font-semibold text-2xl text-gray-300 mb-4'>Projects</h1>
        <div className='w-full relative h-80 sm:mb-20 md:mb-20'>
          <div className='lg:absolute w-full lg:-left-20 h-80 bg-neutral-300 drop-shadow-lg flex items-center justify-between overflow-hidden'>
            <pre className='text-8xl w-1/2 opacity-10 break-words'>
              {projects[selectedProject].title}
            </pre>
            <QRCode
              size={256}
              className="mix-blend-difference opacity-10 w-1/2"
              style={{ height: "100%" }}
              value={projects[selectedProject].link}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
        <div className='px-20 w-full'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-2xl font-semibold text-gray-300'>{projects[selectedProject].title}</h1>
            <h1 className='text-gray-400'>{selectedProject + 1}/{projects.length}</h1>
          </div>
          <h1 className='mb-4 text-gray-400'>{projects[selectedProject].description}</h1>
          <div className='flex items-center justify-between'>
            <div className='flex items-center group'>
              <button
                onClick={nextOrReset}
                type='button' className='z-10 w-16 h-16 rounded-full bg-red-500 hover:bg-gray-600 transition-all duration-100 text-white flex items-center justify-center'>
                {selectedProject + 1 === projects.length ? <RxReset size={24} /> : <BsChevronRight size={24} />}

              </button>
              <span className='text-white p-4 -m-14 transition-all duration-100 group-hover:ml-0'>
                {selectedProject + 1 === projects.length ? "Reset" : "Next"}
              </span>
            </div>
            <a target={"_blank"} href={projects[selectedProject].link}>
              <button type='text' className='flex items-center justify-evenly text-white w-40 bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 px-2 py-3 rounded-md'>
                <AiFillGithub size={22} />
                <span>Github</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
