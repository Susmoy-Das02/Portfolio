import React from 'react';
import circuit from '../../images/circuit.png'
import rideriot from '../../images/rideriot.png'
import backpack from '../../images/backpack.png'

const Projects = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold text-green-500'>My Projects</h1>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={circuit}/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">CIRCUIT-CITY</h2>
        <p class="leading-relaxed text-base">This is an online warehouse-based secured dynamic website where users can log in & book their expected products.</p>
        <p class="leading-relaxed text-base">Users can give reviews & this review will save on the database & show on the home page review section. A user can pay using a payment gateway(stripe) for their booked product.</p>
        <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded"><a href='https://circuit-city-a6dc3.web.app/'  target="_blank" >Live site</a></button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={rideriot}/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">RIDERIOT</h2>
        <p class="leading-relaxed text-base">A fully functional secured online based motorcycle store.</p>
        <p class="leading-relaxed text-base">User can see their previous & current order list.</p>
        <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded"><a href='https://rideriot-bfdd0.web.app/' target="_blank" >Live site</a></button>
        
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={backpack}/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">BACKPACK_TRAVELER</h2>
        <p class="leading-relaxed text-base">Traveling Options with their corresponding price.</p>
        <p class="leading-relaxed text-base">Multiple Login Methods are implemented by using Firebase authentication.</p>
        <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded"><a href='https://backpack-traveler.web.app/' target="_blank" >Live site</a></button>
        
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Button</button>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Projects;