import Banner from "../../Component/Banner/Banner";
import SearchBanner from "../../Component/Banner/SearchBanner";
import Brands from "../../Component/Brands/Brands";
import CustomerComments from "../../Component/CustomerComment/CustomerComments";
import FoodBrand from "../../Component/FoodsBrand/FoodBrand";
import Suggestions from "../../Component/Suggestions/Suggestions";


const Home = () => {
    return (
        <div>
            <SearchBanner></SearchBanner>
            <Brands></Brands>
            <Banner></Banner>
            <Suggestions></Suggestions>
            <FoodBrand></FoodBrand>
            <CustomerComments></CustomerComments>
        </div>
    );
};

export default Home;