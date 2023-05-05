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
    }
  }
}
</script>

<template>
  <div class="searchBar">

      <div class="left">
        <button  @click="$emit('tranding')">Day Tranding</button>
      </div>
      
      <div class="right">
        <input class="research" type="text" 
        v-model="store.inputSearch" @keyup.enter="$emit('cerca')" @keyup="search" >
      </div>

  </div>
</template>


<style lang="scss" scoped>
.searchBar{
  display: flex;
  justify-content: space-between;

  .research{

    
  }
}

</style>