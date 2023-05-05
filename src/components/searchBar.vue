<script>
  import {store} from '../data/store';

export default {
  name: 'SearchBar',

  data(){
    return{
      store
    }    
  },
  methods: {
    search(){
      store.research = store.inputSearch
      // store.inputSearch = ''
      console.log('filtro', store.research)

    }
  }
}
</script>

<template>
  <input type="text" v-model="store.inputSearch" @keyup.enter="$emit('cerca')" @keyup="search" >
  
  <button @click="$emit('tranding')">Tranding</button>
  
</template>


<style>

</style>