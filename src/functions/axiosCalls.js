import axios from 'axios';
import {store} from '../data/store';

export  {logStored,getTranding,getSearch,storeInfo};

// ---------log---------
// fai un log di (array, 'stringa di cosa stai loggando')
function logStored( stored, what) {
  return console.log(what + ' stored', stored.length, stored)
};


// --------- axios functions----------
// --------- tranding----------
function  getTranding(){
  store.filmsGeneres = [];
  store.tvGeneres = [];
  
  axios.get(store.daySearch + store.apiKey + store.lang + store.selectedLang )
  .then(result => {
    store.films = result.data.results;
  })
  axios.get(store.daySearchTv + store.apiKey + store.lang + store.selectedLang )
  .then(result => {
    store.tv = result.data.results;
    logStored(store.films, 'film ');
    logStored(store.tv,      'tv ');
    storeInfo()
  })
};
// --------- search word----------
function  getSearch(){
  store.filmsGeneres = [];
  store.tvGeneres = [];

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
    storeInfo();
  })
};

// --------- get generes----------
function  getFilmsGenres(id){
  axios.get(store.searchIdMovie + id + store.apiKey  )
  .then(result => {
    store.filmsGeneres.push(result.data.genres);
    store.filmsRuntimes.push(result.data.runtime)
    // console.log(result.data.runtime)
  } )
};
function  getTvGenres(id){
  axios.get(store.searchIdTv + id + store.apiKey  )
  .then(result => {
    store.tvGeneres.push( result.data.genres )
    store.tvRuntimes.push( result.data.runtime )
  } )
};

function storeInfo(){

  if (store.films.length > 0) {
    store.films.forEach(film => {
      getFilmsGenres(film.id);
      console.log('get genere for film', film.id,  store.filmsGeneres);
    });
  }else{console.log('no films')}

  if (store.tv.length > 0){
    store.tv.forEach(serie => {
      getTvGenres(serie.id);
      console.log('get genere for serie', serie.id,  store.tvGeneres);
    });
  }else{console.log('no tv series')}
}