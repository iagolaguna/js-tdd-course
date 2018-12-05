/* eslint-disable */
global.fetch = require('node-fetch');
import SpotifyWrapper from '../src';
const token = 'BQDPDnaSDIfxuSBvCF6jNsXuFK214Tzr5SE9DelaIfW15D2azmYC5wUyNNYEtdQIMAVYqSI7e2l7x4NVnjHDe6PisBnAj__aDbrp007xSbdlSmLZZsCHqiaKws6yF8GOKf3wWaSg4gXtv5KC7-3Tir7OeaeKJi8kqNC1Qkkq7ZfXSlfsS-gPoHBu_m1ZGiXHc902D-QoxpWJZq9S_5mbeWsSQ6vkk8dObosxnZvUDRUml9FU7a4EEkNcKDtBkpjUzr1Rqwc7pfeL9vo';
const spotify = new SpotifyWrapper({
  token
})

const albums = spotify.search.albums('Incubus');
albums.then(data => {
  console.log(data);
  data.albums.items.map(item => console.log(item.name))
});
