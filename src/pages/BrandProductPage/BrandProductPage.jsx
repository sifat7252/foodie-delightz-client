
import BrandProduct from "./BrandProduct";
import { useLoaderData } from "react-router-dom";


const BrandProductPage = () => {
  
  // // ::: USE EFFECT FOR THE PRODUCTS :::
  // useEffect(()=>{
  //   fetch('http://localhost:5000/product')
  //   .then((res) => res.json())
  //   .then((data)=>setBrandProduct(data))
  // },[]) 
  const brand = useLoaderData();
  // console.log(brand);
  // console.log(brandProduct)
    return (
        <div>
            <div className="lg:h-[70vh]">
            <div className="carousel h-60  lg:h-full w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="bg-cover-image1 w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full bg-cover-image2" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full bg-cover-image3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full bg-cover-image4" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
            <div className=" flex flex-col items-center  justify-center item-center mx-auto ">
          <h2
            className="font-semibold lg:text-5xl text-xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-blue-500 lg:my-4 p-3"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            Your Choice Is Better Thats Great!!!
          </h2>

          <h2
            className="text-xs lg:text-xl md:text-lg mt-2 mb-6 font-semibold text-slate-300"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            Select Your Choice Item From Here{" "}
          </h2>
          <hr />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {
          brand?.map((food) => <BrandProduct key={food._id} food={food}></BrandProduct>)
        }
        </div>
        </div>
    );
};

export default BrandProductPage;