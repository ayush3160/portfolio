'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import Aboutme from '@/components/sections/Aboutme';
import ChatBot from '@/components/sections/ChatBot';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Home from '@/components/sections/Home';
import OpenSource from '@/components/sections/OpenSource';
import Projects from '@/components/sections/Projects';
import TechStack from '@/components/sections/TechStack';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section>
        <div className='px-10 py-3 main'>
          <div id='chatbot'>
            <ChatBot />
          </div>
          <div id='home'>
            <Home />
          </div>
          <div id='About'>
            <Aboutme />
          </div>
          <div id='Experience'>
            <Experience />
            <OpenSource />
            <TechStack />
          </div>
          <div id='Projects'>
            <Projects />
          </div>
          {/* <div id="Reviews">
          <Reviews/>
        </div> */}
          <div id='Contact'>
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
