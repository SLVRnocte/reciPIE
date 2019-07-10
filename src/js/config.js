// This app is implemented purely on the client side, without our own API server
// so it doesn't matter if the API key is exposed

const apiKeys = [
  "ba9ca2184edfc0d2482c8f28e1fdb06c",
  "c72aea36fc6c93aa6f7a861dc9174db0"
];

export const corsProxy = "https://cors-anywhere.herokuapp.com/";
export const apiKey = apiKeys[1];
