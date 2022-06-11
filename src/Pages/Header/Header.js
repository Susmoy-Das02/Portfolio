import React from 'react';

const Header = () => {
    return (
        <div>
            <header class="bg-green-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl text-white">SUSMOY DAS</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a href="#projects" class="mr-5 hover:text-gray-900">My Projects</a>
      <a href="#about" class="mr-5 hover:text-gray-900">About Me</a>
      <a href="#contact" class="mr-5 hover:text-gray-900">Contact me</a>
    </nav>

    <a class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href="https://drive.google.com/file/d/1clgMPAKGTO8QH9IiPwT_4w3Yqv7waeiz/view?usp=sharing" target="_blank" >Download Resume</a>
    
  </div>
</header>
        </div>
    );
};

export default Header;