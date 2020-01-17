import { connect } from "react-redux";
import { ActionAnimal } from "./ActionAnimal";
import { bindActionCreators } from "redux";
import Animal from "./Animal.js";

const mapStateProps = state => ({
  appData: state.AppState.AppState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ActionAnimal
    },
    dispatch
  );

const Container = connect(
  mapStateProps,
  mapDispatchToProps
)(Animal);

export default Container;
