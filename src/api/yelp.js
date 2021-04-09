import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Nb4kozjP-D2US4Jd4_S8wUE-nE2FILtxAFcSLTfPdB0A7xLGESevtuv90tVzb54K9IM09mUbwaS9qohUsmC8bvsVHXKWY8mBS0Iubwimsr7th9Q11CNz0vfVbk9tYHYx'
  }
});
