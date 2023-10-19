import React from 'react';

const SearchBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/9N7MGSc/photo-1504754524776-8f4f37790ca0-auto-format-fit-max-q-80-blend-000000-blend-alpha-10-blend-mode-nor.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl lg:text-3xl font-bold">The secret of quality of life ? Quality Products</h1>   
        <div className="">
            <div className=""><input type="search" name="search" placeholder='Search Here....' id="" className='h-10 lg:w-full p-3 rounded-lg ' /></div>
            <div className="relative bottom-10 left-20 lg:left-52"><button className='btn-primary rounded-r-lg h-10 w-16 lg:w-32 lg:h-10'>Search</button></div>
        </div>
          
          
        
      <p className="mb-5">We believe the test of all Brander foods. Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat. - Guy Fieri </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default SearchBanner;