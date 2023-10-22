import { Link } from "react-router-dom";

const BrandProduct = ({ food }) => {
  return (
    <div>
      <div className="card lg:card-side bg-gradient-to-r from-sky-500 to-teal-100 shadow-xl p-10">
        <figure>
          <img src={food.productImage} alt="Food" className="h-96 w-80 rounded-2xl" />
        </figure>
        <div className="card-body item-center">
          <h2 className="card-title text-4xl font-bold italic flex items-center justify-center" data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000">{food.productName}</h2>
          <h2 className="card-title text-xl flex items-center justify-center " data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"><span className="text-xl font-bold">Product Type :</span> {food.productType}</h2>
          <h2 className="card-title text-3xl flex items-center justify-center">{food.
brandName
}</h2>
          
          <div className="rating flex-col items-center">
          <div className="rating rating-sm lg:rating-lg">
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
</div>
<h2 className="my-2"><span className="">Top Rating : </span>{food.rating}</h2>
<div className="price text-3xl font-bold italic"><span className="">Price : $</span><span className="">{food.productPrice} </span></div>
          </div>
          <div className="card-actions justify-around items-center my-3">
           <Link to={'/detailsPage'}> <button className="btn  btn-outline text-white bg-violet-500" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000">Details</button></Link>
            <Link to={'/updateProduct'}><button className="btn btn-outline text-white bg-lime-500" data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000">Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
