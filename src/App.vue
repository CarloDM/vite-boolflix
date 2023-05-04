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
      axios.get(store.apiUrl + store.daySearch + store.apiKey)
      .then(result => {
        console.log('films results', result.data.results);
        store.films = result.data.results;
        console.log('film stored', store.films.length)
      })
    }
  },
  mounted(){
    this.getApi();
  }

}
</script>

<template>
  <Header/>
  <Main/>
  
</template>

<style>

</style>
