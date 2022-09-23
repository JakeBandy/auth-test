import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { login, removeBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    business: state.business
  };
};

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    login: (isLoggedIn) => dispatch(login(isLoggedIn)),
    removeBusiness: (business) => dispatch(removeBusiness(business))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);