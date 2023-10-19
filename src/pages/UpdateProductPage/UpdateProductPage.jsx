

const UpdateProductPage = () => {

    const handleUpdateProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const productPrice = form.productPrice.value;
        const rating = form.rating.value;
        const productDescription = form.productDescription.value;
        console.log(productName, productImage, brandName, productType, productPrice, rating, productDescription)
        
    }
    return (
        <div>
            <div className="bg-green-200 lg:px-24 px-5 py-10 rounded-2xl m-10 ">
                <div className="flex justify-center mb-2 "><img src="https://i.ibb.co/ZTLxBdv/logo-color.png" alt="" className="lg:h-40 h-24 rounded-full shadow-2xl" /></div>
            <h2 className="lg:text-3xl text-base flex justify-center items-center font-extrabold lg:my-5" data-aos="zoom-in">Update A Product </h2>
            <form onSubmit={handleUpdateProduct}>

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
                            <input type="text" name="productName" placeholder="Product Name"  className="input input-bordered w-full" />
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
                            <input type="text" name="productImage" placeholder="Image URL"  className="input input-bordered w-full" />
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
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="Brand Name"  className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                            <span className="label-text font-medium text-lg italic">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productType" placeholder="Product Type"  className="input input-bordered w-full" />
                        </label>
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
                            <input type="text" name="productPrice" placeholder="Product Price"  className="input input-bordered w-full" />
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
                            <input type="text" name="rating" placeholder="Rating"  className="input input-bordered w-full" />
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
                            <input type="text" name="productDescription" placeholder="Product Description"  className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn btn-block btn-outline" />

            </form>
        </div>
        </div>
    );
};

export default UpdateProductPage;