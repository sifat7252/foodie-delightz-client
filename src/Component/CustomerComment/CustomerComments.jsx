import { useEffect } from "react";
import { useState } from "react";
import Customer from "./Customer";


const CustomerComments = () => {
    const [customerData, setCustomerData] = useState();
    useEffect(()=>{
        fetch("/brand.json")
        .then(res=>res.json())
        .then(data => setCustomerData(data))
    },[])
    // console.log(customerData)
    return (
        <div>
            <div className=" flex flex-col items-center justify-center item-center mx-auto ">
                
                <h2 className="font-semibold lg:text-5xl text-xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-blue-500 lg:my-4 p-3" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">What Our Customers Says</h2>
                
                <h2 className="text-xs lg:text-lg md:text-2xl mt-2 mb-6 font-semibold text-slate-300" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">Our Happy Customers Leave Their Valuable Comments</h2>
                <hr />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    customerData?.map(customer=><Customer key={customer.id} customer={customer}></Customer>)
                }
            </div>
            
        </div>
    );
};

export default CustomerComments;