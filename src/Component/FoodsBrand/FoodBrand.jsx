import { useEffect, useState } from "react";
import Food from "./Food";


const FoodBrand = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  // console.log(foods)
  return (
    <div>
      <div>
        <div className=" flex flex-col items-center justify-center item-center mx-auto ">
          <h2
            className="font-semibold lg:text-5xl text-xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-blue-500 lg:my-4 p-3"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            Our Foods Types
          </h2>

          <h2
            className="text-xs lg:text-base md:text-base mt-2 mb-6 font-semibold text-slate-300"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            We Always Serve Our Best Foods Ever{" "}
          </h2>
          <hr />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {foods?.map((food) => (
            <Food key={food.id} food={food}></Food>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default FoodBrand;
