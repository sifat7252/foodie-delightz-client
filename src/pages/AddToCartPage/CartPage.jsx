import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";



const CartPage = ({cart}) => {
  const {_id } = cart ;
  const handleDelete = (_id) =>{
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        
        fetch(`http://localhost:5000/myCart/${_id}`, {
          method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }
    return (
        <div className="">
            <div className="w-11/12  mx-auto">
            <div className="card lg:card-side bg-gradient-to-b lg:bg-gradient-to-r from-sky-500 to-teal-100 shadow-xl p-5 lg:p-10 h-11/12 grid lg:grid-cols-2 grid-cols-1 ">
        <div>
        <figure className=" ">
          <img src={cart.productImage} alt="Food" className="lg:h-96 h-56 lg:w-96  rounded-2xl bg-cover shadow-2xl" />
        </figure>
        </div>
        <div className="card-body item-center">
          <h2 className="card-title text-xl lg:text-4xl font-bold italic flex items-center justify-center" data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000">{cart.productName
            }</h2>
          <h2 className="card-title text-sm lg:text-xl flex items-center justify-center " data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"><span className="text-xl font-bold">Product Type :</span> {cart.productType}</h2>
          <h2 className="card-title text-lg lg:text-3xl flex items-center justify-center"><span className="text-lg ">Brand :</span><span className="italic text-xl font-bold">{cart.
brandName}
</span></h2>
          
          <div className="rating flex-col items-center">
          <div className="rating rating-sm lg:rating-lg">
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
</div>
<h2 className="my-2 text-sm lg:text-base"><span className=""><span className="font-bold">Top Rating :</span> </span>{cart.rating}</h2>

<div className="price  text-xl lg:text-3xl font-bold italic" data-aos="zoom-in"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"><span className="">Price : $</span><span className="">{cart.productPrice} </span></div>
          </div>
          <div className="card-actions justify-around items-center my-3">
           <Link > <button className="btn  btn-outline text-white bg-violet-500 btn-xs sm:btn-sm md:btn-md lg:btn-lg" data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000">Order</button></Link>
            <Link onClick={()=> handleDelete(_id)}><button className="btn btn-outline text-white bg-lime-500 btn-xs sm:btn-sm md:btn-md lg:btn-lg" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000">Delete</button></Link>
          </div>
        </div>
        
      </div>
        </div>
        
        </div>
    );
};

export default CartPage;
CartPage.propTypes = {
    cart: PropTypes.node,
  };