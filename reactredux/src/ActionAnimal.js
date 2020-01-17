import axios from "axios";

export const ActionAnimal = mydata => dispatch => {
  axios
    .get("http://styleguide.effectivedigital.com/interview/api/animals")
    .then(res => {
      mydata = res.data;
      dispatch({
        type: "ANIMAL_STATE",
        payLoad: mydata
      });
    });
};
