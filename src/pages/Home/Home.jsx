import CustomerComments from "../../Component/CustomerComment/CustomerComments";
import FoodBrand from "../../Component/FoodsBrand/FoodBrand";


const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <FoodBrand></FoodBrand>
            <CustomerComments></CustomerComments>
        </div>
    );
};

export default Home;