console.log(require("dotenv").config());
import axios from "axios";

console.log(process.env.APIKEY);

async function getResults(query) {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const apiKey = "ba9ca2184edfc0d2482c8f28e1fdb06c";
  const res = await axios(
    `${corsProxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${query}`
  );
  console.log(res);
}
//getResults("pizza");
