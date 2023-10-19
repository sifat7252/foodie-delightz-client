import Brands from "../../Component/Brands/Brands";
import CustomerComments from "../../Component/CustomerComment/CustomerComments";
import FoodBrand from "../../Component/FoodsBrand/FoodBrand";
import Suggestions from "../../Component/Suggestions/Suggestions";


const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <Brands></Brands>
            <Suggestions></Suggestions>
            <FoodBrand></FoodBrand>
            <CustomerComments></CustomerComments>
        </div>
    );
};

export default Home;