// import { Link, useLoaderData, useParams } from "react-router-dom";
// import Swal from "sweetalert2";


// const DetailsPage = () => {
//   // const cartData = useLoaderData();
//   // console.log(cartData);
//   // const {id} = useParams();
//   // console.log(id);

//   // const handleAddToCart = () => {
//   //   fetch('http://localhost:5000/myCart', {
//   //     method: "POST",
//   //     headers: {
//   //       'content-type' : 'applicaiton/json'
//   //     },
//   //     body: JSON.stringify(cartData._id)     
      
//   //   })
//   //   .then(res => res.json())
//   //   .then (data => {
//   //     console.log(data)
//   //     if(data.insertedId){
//   //       Swal.fire({
//   //         title: 'Success',
//   //         text: 'Add to cart successfully.',
//   //         icon: 'success',
//   //         confirmButtonText: 'Okay'

//   //     })
//   //     }
//   //   })
//   // }
//     return (
// //         <div className="w-11/12 mx-auto">
// //             <div className="card lg:card-side bg-gradient-to-b lg:bg-gradient-to-r from-sky-500 to-teal-100 shadow-xl p-5 lg:p-10 h-11/12 grid lg:grid-cols-3 grid-cols-1 ">
// //         <div>
// //         <figure className=" ">
// //           <img src="https://i.ibb.co/9WSbTm2/photo-1615679953957-340c5cb38bd7-auto-format-fit-max-q-80-blend-000000-blend-alpha-10-blend-mode-nor.jpg" alt="Food" className="lg:h-96 h-56 lg:w-96  rounded-2xl bg-cover shadow-2xl" />
// //         </figure>
// //         </div>
// //         <div className="card-body item-center">
// //           <h2 className="card-title text-xl lg:text-4xl font-bold italic flex items-center justify-center" data-aos="fade-right"
// //             data-aos-anchor="#example-anchor"
// //             data-aos-offset="500"
// //             data-aos-duration="1000">Starbuck coffee</h2>
// //           <h2 className="card-title text-sm lg:text-xl flex items-center justify-center " data-aos="fade-left"
// //             data-aos-anchor="#example-anchor"
// //             data-aos-offset="500"
// //             data-aos-duration="1000"><span className="text-xl font-bold">Product Type :</span> food.productType</h2>
// //           <h2 className="card-title text-lg lg:text-3xl flex items-center justify-center"><span className="text-lg ">Brand :</span><span className="italic text-xl font-bold">food.
// // brandName
// // </span></h2>
          
// //           <div className="rating flex-col items-center">
// //           <div className="rating rating-sm lg:rating-lg">
// //   <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
// //   <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
// //   <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
// //   <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
// //   <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
// // </div>
// // <h2 className="my-2 text-sm lg:text-base"><span className=""><span className="font-bold">Top Rating :</span> </span>food.rating</h2>

// // <div className="price  text-xl lg:text-3xl font-bold italic" data-aos="zoom-in"
// //             data-aos-anchor="#example-anchor"
// //             data-aos-offset="500"
// //             data-aos-duration="1000"><span className="">Price : $</span><span className="">food.productPrice </span></div>
// //           </div>
// //           <div className="card-actions justify-around items-center my-3">
// //            <Link to={`/brandProductPage/${cartData._id}`}> <button className="btn  btn-outline text-white bg-violet-500 btn-xs sm:btn-sm md:btn-md lg:btn-lg" data-aos="fade-right"
// //             data-aos-anchor="#example-anchor"
// //             data-aos-offset="500"
// //             data-aos-duration="1000">Go Back</button></Link>
// //             <Link><button  className="btn btn-outline text-white bg-lime-500 btn-xs sm:btn-sm md:btn-md lg:btn-lg" data-aos="fade-left"
// //             data-aos-anchor="#example-anchor"
// //             data-aos-offset="500"
// //             data-aos-duration="1000">Add To Cart</button></Link>
// //           </div>
// //         </div>
// //         <div className="lg:p-10 p-5 shadow-xl bg-gradient-to-l from-sky-500 to-teal-200 rounded-3xl">
// //             <h2 className="card-title text-xl  lg:text-4xl font-bold italic flex items-center justify-center" data-aos="fade-right"
// //             data-aos-anchor="#example-anchor"
// //             data-aos-offset="500"
// //             data-aos-duration="500">Product Description</h2>
// //             <hr className="h-2 my-4 bg-gradient-to-r from-violet-500 to-violet-200 rounded-full"data-aos="fade-left"
// //             data-aos-anchor="#example-anchor"
// //             data-aos-offset="500"
// //             data-aos-duration="500"/>
// //             <h2 className="lg:text-lg text-sm font-medium text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam numquam quod laboriosam et neque eveniet quis eum nobis error? A quae ad, illo eveniet cum provident! Nobis modi et voluptas animi culpa magni est voluptatibus nostrum totam quia sit perferendis ratione, explicabo earum obcaecati, nulla reprehenderit alias omnis quae?</h2></div>
// //       </div>
// //         </div>
//     );
// };

// export default DetailsPage;

// // onClick={handleAddToCart}