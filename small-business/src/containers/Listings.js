import { connect } from "react-redux";
import Listings from "../components/Listings";
import { removeBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    business: state.business
  };
};

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    removeBusiness: (business) => dispatch(removeBusiness(business)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);