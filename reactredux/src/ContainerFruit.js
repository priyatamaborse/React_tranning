import { connect } from "react-redux";
import { ActionFruit } from "./ActionFruit";
import { bindActionCreators } from "redux";
import Fruit from "./Fruit";

const mapStateProps = state => ({
  appData: state.FruitState.FruitState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ActionFruit
    },
    dispatch
  );

const Container = connect(
  mapStateProps,
  mapDispatchToProps
)(Fruit);

export default Container;
