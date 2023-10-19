

const Suggestions = () => {
    return (
        <div>
            <div className=" flex flex-col items-center justify-center item-center mx-auto ">
          <h2
            className="font-semibold lg:text-5xl text-xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-blue-500 lg:my-4 p-3"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            Our Services
          </h2>

          <h2
            className="text-xs lg:text-base md:text-base mt-2 mb-6 font-semibold text-slate-300"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            You are Always First Priority For Us{" "}
          </h2>
          <hr />
        </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-auto mx-auto gap-2 p-4">
                <div >
                   <div className="card h-60 lg:h-96 mt-20  lg:mb-6 p-4 text-center items-center bg-cyan-100 justify-center shadow-xl " data-aos="fade-up-right">
                   <img src="https://i.ibb.co/ThssRWv/istockphoto-1240035453-612x612.jpg" alt="" className="h-40 mb-8 items-center mx-auto rounded-full" />
                   <h2 className="text-2xl font-medium mb-5">Order Anytime</h2>
                    <p className="text-xs  text-slate-500">With your pc or online device you can order any time from here. It is too easy.</p>
                   </div>
                   {/* <div className="relative -ml-20 mt-40 w-14 hover:divide-amber-400">
                    <h2 className="text-8xl   text-slate-200">1</h2>
                    <hr  />
                   </div> */}
                   
                </div>
                <div >
                   <div className="card h-80 lg:h-96 mt-20  mb-6 p-4 text-center items-center bg-rose-200 justify-center shadow-xl  " data-aos="zoom-in-up"
     >
                   <img src="https://i.ibb.co/168WhFb/fast-delivery-icon-fast-delivery-logo-free-vector.jpg" alt="" className="rounded-full h-40 mb-8 items-center mx-auto" />
                   <h2 className="text-2xl font-medium mb-5">Fastest Delivery</h2>
                    <p className="text-xs  text-slate-500">Only our site can give your food at the time with our fastest delivery option. So Order now !!!</p>
                   </div>
                   {/* <div className="relative -ml-20 mt-40 w-14 hover:divide-amber-400">
                    <h2 className="text-8xl   text-slate-200">2</h2>
                    <hr  />
                   </div> */}
                   
                </div>
                <div >
                   <div className="card h-80 lg:h-96 mt-20  mb-6 p-4 text-center items-center  bg-blue-200 justify-center shadow-xl " data-aos="zoom-in-up">
                   <img src="https://i.ibb.co/nkWSKMw/360-F-553007886-vpg-BDlw-Ay-Aa-CTABowv-Ia-PMPg437ha-VKR.jpg" alt="" className="rounded-full h-40 mb-8 items-center mx-auto" />
                   <h2 className="text-2xl font-medium mb-5">Guaranteed Organic Food</h2>
                    <p className="text-xs  text-slate-500"> With out branded food you can the original and organic food from here. </p>
                   </div>
                   {/* <div className="relative -ml-20 mt-40 w-14 hover:divide-amber-400">
                    <h2 className="text-8xl   text-slate-200">3</h2>
                    <hr  />
                   </div> */}
                   
                </div>
                <div >
                   <div className="card h-80 lg:h-96 mt-20  mb-6 p-4 text-center items-center bg-fuchsia-300  justify-center shadow-xl " data-aos="fade-up-right">
                   <img src="https://i.ibb.co/3MJSjn8/vector-coffee-logo-21363066.webp" alt="" className="rounded-full h-40 mb-8 items-center mx-auto" />
                   <h2 className="text-2xl font-medium">Make Your Day By First Coffee</h2>
                    <p className="text-xs  text-slate-500">A day start with a good coffee is the better choice for a perfect men.</p>
                   </div>
                   {/* <div className="relative -ml-20 mt-40 w-14 hover:divide-amber-400">
                    <h2 className="text-8xl   text-slate-200">4</h2>
                    <hr  />
                   </div> */}
                   
                </div>
                
            </div>
        </div>
    );
};

export default Suggestions;