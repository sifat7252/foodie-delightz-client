import { useEffect, useState } from "react";
import CartPage from "./CartPage";


const AddToCartPage = () => {
    const [myCart, setMyCart] = useState();
    // // ::: USE EFFECT FOR THE PRODUCTS :::
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then((res) => res.json())
    .then((data)=>setMyCart(data))
  },[]) 
//   console.log(myCart)
    return (
        <div className="w-11/12 mx-auto">
            <div className=" flex flex-col items-center  justify-center item-center mx-auto ">
          <h2
            className="font-semibold lg:text-5xl text-xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-blue-500 lg:my-4 p-3"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            My Cart
          </h2>

          <h2
            className="text-xs lg:text-xl md:text-lg mt-2 mb-6 font-semibold text-slate-300"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
           Check Here Whats Your Added Items{" "}
          </h2>
          <hr />
        </div>
        <div className="grid grid-cols-3">
        <div className="grid grid-cols-1 col-span-2 gap-5">
            {
                myCart?.map((cart)=><CartPage key={cart._id} cart={cart}></CartPage>)
            }
        </div>
        <div className="cart-checkout col-span-1">
        <div className="p-6 bg-slate-200  gap-4 rounded-lg mt-4 mx-2">
            <div className="">
            <h3 className="remaining-time font-bold text-sm lg:text-2xl m-5 text-blue-600 flex items-center justify-center">Order Summary</h3>
            <div className="flex justify-between">
                <h2 className="">Subtotal (0 item)</h2>
                <h2 className="">$ <span>price</span></h2>
            </div>
            <div className="flex justify-between">
                <h2 className="">Shipping Fee</h2>
                <h2 className="">$ <span>price</span></h2>
            </div>
            
            <hr className=" border-1 border-gray-400 m-5"/>
            </div>
            
            <div className="">
            <div className="">
              <div className="flex item-center justify-center">
                <input
                  type="text"
                  name="voucher"
                  placeholder="Type Your Voucher Code"
                  id=""
                  className="h-10 lg:w-10/12  p-3 rounded-lg "
                />
              </div>
              <div className="relative bottom-10 left-20 lg:left-[68%]">
                <button className="btn-primary rounded-r-lg h-10 w-16 lg:w-32 lg:h-10">
                  Apply
                </button>
              </div>
            </div>
            </div>
            <div className="">
            <h3 className="total-price font-semibold text-">Total Price : totalPrize $</h3>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default AddToCartPage;