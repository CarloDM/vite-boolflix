<script>
import axios from 'axios';
import {store} from './data/store';
import { logStored,getTranding,getSearch } from './functions/axiosCalls';
import Header from './components/header.vue';
import Main from './components/main.vue';

export default {
  name: 'app',
  components: {
    Header,
    Main,
  },

  methods: {
    test(){
    },

    TrandingInput(){
      getTranding()
    },

    WordInput(){
      getSearch()
    },
  },
  mounted(){
    this.TrandingInput();
  },

}
</script>

<template>
  <div class="main_wrapper">
    <button @click="test">test</button>
    <Header @ricerca="WordInput" @tranding="TrandingInput" />
    <Main />
    
  </div>
</template>

<style lang="scss">
@import './scss/main.scss';

</style>
