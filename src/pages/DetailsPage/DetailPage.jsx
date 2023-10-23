import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import SingleDetailPage from "./SingleDetailPage";


const DetailPage = () => {
    const [singleProduct, setSingleProduct] = useState();
    const products = useLoaderData();
    // console.log(products)
    const {id } = useParams();
    // console.log(id);

    useEffect(()=>{
        const product = products?.filter(food => food._id == id)
        // console.log(product);
        setSingleProduct(product);
    },[id, products])
    // console.log(singleProduct);
    return (
        <div>
            
        <div className="">
            {
                singleProduct?.map(food => <SingleDetailPage key={food._id} food={food}></SingleDetailPage>)
            }
        </div>
        </div>
    );
};

export default DetailPage;