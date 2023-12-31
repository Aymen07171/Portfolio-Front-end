import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home(props) {
  // useEffect to initialize AOS when the component mounts
  useEffect(()=> {
    AOS.init({duration:2000});
  },[])

  // The component's structure
  return (
    <div id="Home" className="flex items-center w-full min-h-screen justify-center p-5">
      <div className="container max-w-4xl m-20 lg:m-auto">
        {/* Content with data-aos attributes for animations */}
        <p className="text-cyan-300 mb-4" data-aos="fade" data-aos-duration="2000">{props.textBlue.content}</p>
        <h1 className="text-5xl sm:text-7xl text-sky-200 mb-4" data-aos="fade" data-aos-duration="2000" data-aos-delay="500">{props.titre.content}</h1>
        <h2 className="text-4xl sm:text-6xl text-indigo-300/60 mb-4" data-aos="fade" data-aos-duration="2000" data-aos-delay="1000">{props.sousTitre.content}</h2>
        <p className="text-gray-200 sm:text-justify text-sm lg:text-l mb-10" data-aos="fade" data-aos-duration="2000" data-aos-delay="1500">{props.text.content}</p>
        
        {/* Link to GitHub */}
        <a
          href={props.github.content}
          rel="noreferrer"
          className="transition delay-150 box-border px-5 py-2 mt-4 border rounded border-cyan-300 text-center text-cyan-300 text-xl hover:bg-cyan-300/20"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="2000"
          target="_blank"
          style={{ marginBottom: '20px' }}

        >
      
          {props.github.id}
          
        </a>
        {'                            '}

        <a
          href={props.gitcv.content}
          rel="noreferrer"
          className="transition delay-300 box-border px-10 py-2 mt-10 border rounded border-cyan-300 text-center text-cyan-300 text-xl hover:bg-cyan-300/10"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="2000"
          target="_blank"
        >
           {props.gitcv.id}
        </a>
      </div>
    </div>
  );
}

export default Home;
