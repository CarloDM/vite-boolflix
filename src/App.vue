<script>
import {store} from './data/store';
import Header from './components/header.vue';
import Main from './components/main.vue';
export default {
  name: 'app',
  components: {
    Header,
    Main,
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
