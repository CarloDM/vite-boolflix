<script>
import {store} from '../data/store.js';
import Card from './card.vue';

export default {
  name: 'Main',
  components:{
    Card,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>

  <Card v-for="(card,index) in store.films" :key='index'
  :title="card.title"
  :originTitle="card.original_title"
  :lang="card.original_language"
  :vote="card.vote_average"
  />

</template>

<style>

</style>