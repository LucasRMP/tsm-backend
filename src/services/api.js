const axios = require('axios');

const api = axios.create({
  baseURL: 'https://www.episodate.com/api',
});

module.exports = api;
