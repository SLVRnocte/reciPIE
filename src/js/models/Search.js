import axios from "axios";
import { apiKey, corsProxy } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(
        `${corsProxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${
          this.query
        }`
      );
      this.result = res.data.recipes;
      //console.log(this.result);
    } catch (err) {
      alert(err);
    }
  }
}
