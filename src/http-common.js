import axios from "axios";
export default axios.create({
  baseURL: "https://picadon-server.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});