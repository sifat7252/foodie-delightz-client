import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Brand = ({brand}) => {
    return (
        <div>
            <div
        className="card  lg:mx-5 h-40 bg-base-100 shadow-xl image-full "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <figure>
          <img src={brand.brand_image} alt="brand" className="" />
        </figure>
        <div
          className="card-body relative top-20 lg:top-26 "
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <Link to={`/brandProductPage/${brand.id}`}>
            <h2 className="card-title hover:text-blue-500">{brand.brand_name}</h2>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default Brand;
Brand.propTypes ={
    brand: PropTypes.node,
}