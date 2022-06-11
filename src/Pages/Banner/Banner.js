import React from 'react';
import Programming from '../../images/Programming.svg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            
            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi,I am SUSMOY
      </h1>
      <p class="mb-8 leading-relaxed">I loved designing things, so I started designing websites to improve my skills. This meant that I had to create something new every week, which was a little better for each project.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Hire me</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={Programming}/>
    </div>
  </div>
</section>

        </div>
    );
};

export default Banner;