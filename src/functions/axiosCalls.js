import axios from 'axios';
import {store} from '../data/store';

export  {logStored,getTranding,getSearch};

// ---------log---------
// fai un log di (array, 'stringa di cosa stai loggando')
function logStored( stored, what) {
  return console.log(what + ' stored', stored.length, stored)
};

// --------- axios functions----------
// --------- tranding----------
function  getTranding(){
  axios.get(store.daySearch + store.apiKey + store.lang + store.selectedLang )
  .then(result => {
    store.films = result.data.results;
  })
  axios.get(store.daySearchTv + store.apiKey + store.lang + store.selectedLang )
  .then(result => {
    store.tv = result.data.results;
    logStored(store.films, 'film ');
    logStored(store.tv,      'tv ');
  })
};
// --------- search word----------
function  getSearch(){
  console.log('filtro', store.research)
  axios.get(store.searchMovie + store.apiKey  + store.lang + store.selectedLang  + store.searchWord + store.research )
  .then(result => {
    store.films = result.data.results;
  })
  axios.get(store.searchTv + store.apiKey  + store.lang + store.selectedLang  + store.searchWord + store.research )
  .then(result => {
    store.tv = result.data.results;
    logStored(store.films, 'film ');
    logStored(store.tv,      'tv ');
  })
};