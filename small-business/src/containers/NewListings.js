import { connect } from "react-redux";
import NewListings from "../components/NewListings";
import { addBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    business: state.business
  };
};

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    addBusiness: (business) => dispatch(addBusiness(business)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewListings);