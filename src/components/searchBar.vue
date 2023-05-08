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
    },
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

        <div class="lang">
          <img :class="{'active' : store.selectedLang =='it' }" 
          @click="store.selectedLang = 'it'" 
          src="../assets/it.png" alt="">

          <img :class="{'active' : store.selectedLang =='en' }" 
          @click="store.selectedLang = 'en'" 
          src="../assets/en.png" alt="">
        </div>
      </div>

      

  </div>
</template>


<style lang="scss" scoped>
@use '../scss/var.scss' as *;
.searchBar{
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left{
    button{
      color: grey;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      &:hover{
        color: white;
      }
    }
  }
  .right{
    display: flex;
    align-items: center;

    .research{
      height: 20px;
      background-color: $bg-black;
      color: lightgray;
      border: none;
    }

    .lang{
      width: 20px;

      margin-left: 10px;
      img{
        width: 90%;
        &:hover{
          cursor: pointer;
        }
        &.active{
          border: 1px solid white;
        }
      }
    }
  }
}

</style>