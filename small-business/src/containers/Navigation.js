import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { login } from "../redux/actions";

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);