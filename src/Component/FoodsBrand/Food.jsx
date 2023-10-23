import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  // console.log(food)
  return (
    <div>
      <div
        className="card  lg:mx-5 h-40 lg:h-80 bg-base-100 shadow-xl image-full "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <figure>
          <img src={food.image} alt="brand" className="w-full" />
        </figure>
        <div
          className="card-body relative top-20 lg:top-2"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <Link to={food.name}>
            <h2 className="card-title hover:text-blue-500">{food.name}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
Food.propTypes = {
  food: PropTypes.node
};
