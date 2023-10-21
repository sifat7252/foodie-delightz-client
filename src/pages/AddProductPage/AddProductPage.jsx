import Swal from 'sweetalert2'

const AddProductPage = () => {
    
    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const productPrice = form.productPrice.value;
        const rating = form.rating.value;
        const productDescription = form.productDescription.value;
        const newProduct = {productName, productImage, brandName, productType, productPrice, rating, productDescription}
        console.log(newProduct)

        // ::: SENDING PRODUCT DATA TO SERVER SITE :::
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product added successfully.',
                    icon: 'success',
                    confirmButtonText: 'Okay'

                })
                form.reset();
            }
        })
        
    }
    return (
        <div>
             <div className="bg-sky-200 lg:px-24 px-5 py-10 rounded-2xl m-10 ">
                <div className="flex justify-center mb-2 "><img src="https://i.ibb.co/b50nxsv/logo-black.png" alt="" className="lg:h-40 h-24 rounded-full shadow-2xl" /></div>
            <h2 className="lg:text-3xl text-base flex justify-center items-center font-extrabold lg:my-5" data-aos="zoom-in">Add Product For Your Shop</h2>
            <form onSubmit={handleAddProduct}>

                {/*  PRODUCT NAME & PRODUCT IMAGE */}

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                            <span className="label-text font-medium text-lg italic">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productName" placeholder="Product Name" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label " data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                            <span className="label-text font-medium text-lg italic">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productImage" placeholder="Image URL" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* PRODUCT BRAND NAME & TYPE */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                            <span className="label-text font-medium text-lg italic">Brand Name</span>
                        </label>
                        <select name="brandName" id="brandName" className=" text-gray-800 px-3 py-1 input input-bordered w-full">
                                <option value="Select">Select</option>
                                <option value="Coca-Cola">Coca-Cola</option>
                                <option value="McDonald's">McDonalds</option>
                                <option value="Starbucks">Starbucks</option>
                                <option value="Nestlé">Nestlé</option>
                                <option value="Kellogg's">Kelloggs</option>
                                <option value="KFC">KFC</option>
                            </select>
                        {/* <label className="input-group">
                            <input type="text" name="brandName" placeholder="Brand Name" required className="input input-bordered w-full" />
                        </label> */}
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                            <span className="label-text font-medium text-lg italic">Product Type</span>
                        </label>
                        
                            <select name="productType" id="productType" className=" text-gray-800 px-3 py-1 input input-bordered w-full">
                                <option value="Select">Select</option>
                                <option value="Beverages">Beverages</option>
                                <option value="French Fries">French Fries</option>
                                <option value="Tea & Coffees">Tea & Coffees</option>
                                <option value="Chocolates">Chocolates</option>
                                <option value="Chicken Fries">Chicken Fries</option>
                                <option value="Healthy Foods">Healthy Foods</option>
                            </select>
                            {/* <input type="text" name="productType" placeholder="Product Type" required className="input input-bordered w-full" /> */}
                        
                    </div>
                </div>
                {/* PRODUCT PRICE & RATING */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                            <span className="label-text font-medium text-lg italic">Product Price </span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="productPrice" placeholder="Product Price" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                            <span className="label-text font-medium text-lg italic">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="Rating" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* PRODUCT DESCRIPTION  */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                            <span className="label-text font-medium text-lg italic">Product Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productDescription" placeholder="Product Description" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block btn-outline" />

            </form>
        </div>
        </div>
    );
};

export default AddProductPage;