import React from 'react';
import Boyd from "../../assets/imgs/Boydsuit.jpeg"
import TextTransition, { presets } from "react-text-transition";
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const TEXTS = [
  'Insert',
  'Clever',
  'Things to say',
  'About Life and what not'
];

function Everything() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000
    );
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col mx-auto md:container md:mx-auto sm:mx-8 rounded-xl p-5 m-4 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900 w-11/12">
      <img src={Boyd} alt="Headshot" className="w-32 h-auto rounded-lg mt-auto mb-auto mx-auto m-1" />
      <div className="pt-2 text-center space-y-4">
        <h1 className="text-4xl text-stone-200 m-1">｛Boyd Roberts｝</h1>
        <p className='flex justify-center italic text-stone-200'>
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </p>
        <h2 className="flex justify-center text-xl text-stone-100">Full Stack | | Developer</h2>
        <div className='md:flex flex flex-col whitespace-pre'>
          <a className='text-stone-900 text-3xl relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium bg-gradient-to-tl from-blue-700 to-sky-300 hover:text-fuchsia-100 w-4/12 focus:outline-none px-5 py-2.5 rounded-md'
            href="https://github.com/coleyrockin" target="_blank" rel="noopener noreferrer">Github <FaGithub /></a>
          <a className='text-stone-900 text-3xl relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium bg-gradient-to-tr from-blue-600 to-sky-300 hover:text-fuchsia-100 w-4/12 focus:outline-none px-5 py-2.5 rounded-md'
            href="https://coleyrockin.github.io/react-portfolio/" target="_blank" rel="noopener noreferrer">Portfolio <FaGlobe /></a>
          <a className='text-stone-900 text-3xl relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium bg-gradient-to-bl from-blue-600 to-sky-400 hover:text-fuchsia-100 w-4/12 focus:outline-none px-5 py-2.5 rounded-md'
            href="https://www.linkedin.com/in/boydcroberts/" target="_blank" rel="noopener noreferrer">Linkedin <FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default Everything;