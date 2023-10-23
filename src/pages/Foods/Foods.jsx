import { useEffect, useState } from "react";
import Food from "./Food";


const Foods = () => {
    const [allProduct, setAllProduct] = useState();
  // // ::: USE EFFECT FOR THE PRODUCTS :::
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then((res) => res.json())
    .then((data)=>setAllProduct(data))
  },[])
    return (
        <div>
            <div className=" flex flex-col items-center  justify-center item-center mx-auto ">
          <h2
            className="font-semibold lg:text-5xl text-xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-blue-500 lg:my-4 p-3"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            Our All Foods Are Shows Here
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
          allProduct?.map((food) => <Food key={food._id} food={food}></Food>)
        }
        </div>
        </div>
    );
};

export default Foods;