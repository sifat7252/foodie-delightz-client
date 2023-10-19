import PropTypes from "prop-types";

const Customer = ({customer}) => {
    // console.log(customer)
    return (
        <div>
            <div className="bg-sky-100 mx-10 lg:mx-3 p-5 lg:p-8 rounded-xl shadow-lg">
                <div className="name flex justify-center" data-aos="fade-right"><h2 className="font-medium italic">{customer.author_name}</h2></div>
                <div className="image flex justify-center my-3 "><img src={customer.author_image} alt="author" className="h-28 rounded-full" /></div>
                <div className="flex justify-center" data-aos="fade-left"><h2 className="text-sm font-extrabold text-slate-400">{customer.professions}</h2>
                </div>
                <div className="comment flex justify-center my-3"><p className="text-xs only: text-slate-400">{customer.comment}</p></div>
            </div>
        </div>
    );
};

export default Customer;
Customer.propTypes = {
    customer: PropTypes.node,
    
  };

