<script>
import axios from 'axios';
import {store} from './data/store';
import Header from './components/header.vue';
import Main from './components/main.vue';
export default {
  name: 'app',
  components: {
    Header,
    Main,
  },



  methods: {
    getApiTranding(){
      axios.get(store.daySearch + store.apiKey + store.lang)
      .then(result => {
        store.films = result.data.results;
        console.log('film stored', store.films.length,store.films )
      })

      axios.get(store.daySearchTv + store.apiKey + store.lang)
      .then(result => {
        store.tv = result.data.results;
        console.log('tv stored', store.tv.length, store.tv)
      })
    },

    apiSearch(){
      axios.get(store.searchMovie + store.apiKey  + store.lang + store.searchWord + store.research )
      .then(result => {
        store.films = result.data.results;
        // store.inputSearch = ''
        console.log('film stored', store.films.length, store.films)
      })

      axios.get(store.searchTv + store.apiKey  + store.lang + store.searchWord + store.research )
      .then(result => {
        store.tv = result.data.results;
        // store.inputSearch = ''
        console.log('tv stored', store.tv.length, store.tv)
      })
    },
  },
  mounted(){
    this.getApiTranding();
  }

}
</script>

<template>
  <div class="main_wrapper">
    
    <Header @ricerca="apiSearch" @tranding="getApiTranding" />
    <Main />
    
  </div>
</template>

<style lang="scss">
@import './scss/main.scss';

</style>
