import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { VscListSelection } from 'react-icons/vsc';

import { ModeToggle } from '@/components/mode-toggle';
import NextImage from '@/components/NextImage';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Logo from '@/assets/Logo.png';
import LogoDark from '@/assets/Logodark.png';
import ProfilePhoto from '@/assets/Profile-Photo.png';

const Home = () => {
  const navigateToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const texts = [
    ' Software Developer',
    ' Problem Solver',
    'n Open Source Contributer',
    ' Tech Enthusiast',
  ];
  const sections = ['About', 'Experience', 'Projects', 'Contact'];

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayText((prev) => prev + texts[textIndex][prev.length]);
      if (displayText === texts[textIndex]) {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setDisplayText('');
      }
    }, 125);
    return () => clearInterval(timer);
  }, [textIndex, displayText, texts]);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between md:mx-20 '>
        <div className='mt-5'>
          <NextImage
            src={Logo}
            className='w-20 dark:hidden'
            alt='Dark Logo'
            useSkeleton={true}
            width={50}
            height={50}
          />
          <NextImage
            src={LogoDark}
            className='w-20 hidden dark:block '
            alt='Dark Logo'
            useSkeleton={true}
            width={50}
            height={50}
          />
        </div>
        <div className='flex flex-row  items-center gap-3 lg:gap-9 my-6 font-medium'>
          <div>
            <ModeToggle />
          </div>
          <div className='block lg:hidden px-3 py-2 rounded-md bg-transparent shadow-sm ring-2 ring-gray-100 dark:ring-gray-900'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <VscListSelection size={18} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {sections.map((section) => (
                  <DropdownMenuItem key={section}>
                    <div
                      onClick={(event) => {
                        event.preventDefault();
                        navigateToSection(section);
                      }}
                    >
                      {section}
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <a
                    href='https://drive.google.com/file/d/1EjwBGFmeEV010fhoKIUrhc-0fhuaKeRa/view?usp=sharing'
                    target='_blank'
                  >
                    Resume
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className='flex flex-row gap-9 hidden lg:flex'>
            {sections.map((section) => (
              <div key={section} onClick={() => navigateToSection(section)}>
                {section}
              </div>
            ))}
            <div>
              <a
                href='https://drive.google.com/file/d/1EjwBGFmeEV010fhoKIUrhc-0fhuaKeRa/view?usp=sharing'
                target='_blank'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row  items-center justify-center my-32 lg:my-16'>
        {/* Main Profile with name , pic & social links */}
        <div>
          <h3 className='scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight text-left mx-1'>
            I am
          </h3>
          <h1 className='scroll-m-20 font-extrabold tracking-tight text-3xl md:text-5xl whitespace-nowrap'>
            Ayush Sharma
          </h1>
          <h3 className='scroll-m-20 text-sm md:text-2xl font-semibold tracking-tight px-1 py-2 text-left'>
            A{displayText}
            <span className='typing-cursor'>|</span>
          </h3>
          <div className='flex flex-row gap-3 py-2 justify-center'>
            <a
              href='https://github.com/ayush3160'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://www.linkedin.com/in/ayush-sharma-6b5803235/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='https://twitter.com/ayush3160'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className='flex lg:ml-10'>
          <NextImage
            src={ProfilePhoto}
            classNames={{
              image:
                'w-60 lg:mx-16 flex flex-row justify-center mt-16 rounded-full outline outline-4 dark:outline-white hidden lg:block',
            }}
            alt='Dark Logo'
            useSkeleton={true}
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className='flex flex-row gap-3 py-2 justify-center'>
        <IoIosArrowDown
          className='blink'
          size={32}
          onClick={() => navigateToSection('About')}
        />
      </div>
    </div>
  );
};

export default Home;
