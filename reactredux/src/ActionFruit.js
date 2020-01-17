import axios from "axios";

export const ActionFruit = mydata => dispatch => {
  axios
    .get("http://styleguide.effectivedigital.com/interview/api/fruitveg ")
    .then(res => {
      mydata = res.data;
      dispatch({
        type: "FRUIT_STATE",
        payLoad: mydata
      });
    });
};
