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
    getApi(){
      axios.get(store.daySearch + store.apiKey + store.lang)
      // axios.get(store.searchpat + store.apiKey  + store.lang + store.searchWord + store.research )
      .then(result => {
        console.log('films results', result.data.results);
        store.films = result.data.results;
        console.log('film stored', store.films.length)
      })
    },
    apiSearch(){
      axios.get(store.searchMovie + store.apiKey  + store.lang + store.searchWord + store.research )
      .then(result => {
        console.log('films results', result.data.results);
        store.films = result.data.results;
        store.inputSearch = ''
        console.log('film stored', store.films.length)
      })
      axios.get(store.searchTv + store.apiKey  + store.lang + store.searchWord + store.research )
      .then(result => {
        console.log('tv results', result.data.results);
        store.tv = result.data.results;
        store.inputSearch = ''
        console.log('tv stored', store.tv.length)
      })
    },
  },
  mounted(){
    this.getApi();
  }

}
</script>

<template>
  <Header />
  <Main @ricerca="apiSearch"/>
  
</template>

<style>

</style>
