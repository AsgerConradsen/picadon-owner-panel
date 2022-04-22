import axios from "axios";
export default axios.create({
  baseURL: "https://picadon-server-1.herokuapp.com",
  headers: {
    "Content-type": "multipart/form-data"
  }
});