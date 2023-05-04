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
        console.log('films',result.data.results)
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
