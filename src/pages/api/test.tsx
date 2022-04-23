import axios from "axios";

export const getRestaurant = async () => {
  const { data } = await axios
    .get(`http://localhost1337/api`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
};
