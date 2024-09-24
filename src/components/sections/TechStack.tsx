import { FaAws, FaNodeJs } from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPython,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const TechStack = () => {
  const techStack = [
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Next.js', icon: <TbBrandNextjs /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'FireBase', icon: <SiFirebase /> },
    { name: 'Socket.io', icon: <SiSocketdotio /> },
    { name: 'Github', icon: <SiGithub /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'AWS', icon: <FaAws /> },
  ];

  return (
    <div className='md:my-24 md:px-24'>
      <h1 className='scroll-m-20 font-extrabold tracking-tight text-2xl lg:text-4xl py-8 flex flex-row justify-center whitespace-nowrap my-6'>
        Technologies
      </h1>
      <div className='flex flex-wrap justify-center gap-4 items-center'>
        {techStack.map((tech, index) => (
          <div key={index} className='flex items-center gap-2'>
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
