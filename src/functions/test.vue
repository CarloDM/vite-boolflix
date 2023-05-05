<script>
import {store} from '../data/store.js';
export default {
  name:'test function',
  methods:{

  getCards(){
  axios.get(store.searchMovie + store.apiKey  + store.lang + store.searchWord + store.research )
  .then(result => {
    console.warn(result.data.results)
    store.films = result.data.results;
    logStored(store.films, 'getcard func ');
  })
},
  },
  data(){
    return {
      store,
    }
  }
}
</script>

<template>
  
</template>
<style>

</style>