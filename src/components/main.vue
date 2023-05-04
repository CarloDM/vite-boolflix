<script>
import {store} from '../data/store.js';
import Card from './card.vue';
import SearchBar from './searchBar.vue'

export default {
  name: 'Main',
  components:{
    Card,
    SearchBar,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>

  <SearchBar @cerca="$emit('ricerca')"/>

  <Card v-for="(card, index) in store.films" :key='index'
  :title="card.title"
  :originTitle="card.original_title"
  :lang="store.selectedLang"
  :vote="card.vote_average"
  :id="card.id"
  />
  <Card class="debug2" v-for="(card, index) in store.tv" :key='index'
  :title="card.name"
  :originTitle="card.original_name"
  :lang="store.selectedLang"
  :vote="card.vote_average"
  :id="card.id"
  />

</template>

<style>

</style>