<script>
import {store} from '../data/store.js';
import Card from './card.vue';

export default {
  name: 'main',
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
  />

</template>

<style>

</style>