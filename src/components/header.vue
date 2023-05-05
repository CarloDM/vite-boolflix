<script>
import SearchBar from './searchBar.vue';
export default {
  name:'Header',
  components:{
    SearchBar,
  },
}
</script>

<template>
  <header class="">
    <div class="container">

        <div class="logo">
          <img src="../assets/logo-boolflix.png" alt="">
        </div>
        
        <SearchBar class="SearchBar" 
        @cerca="$emit('ricerca')" @tranding="$emit('tranding')" />

    </div>
  </header>
</template>


<style lang="scss" scoped >
@use '../scss/var.scss' as *;

header{
  width: 100%;
  height: 50px;
  background-image: linear-gradient($bg-header, $bg-black);
  .container{
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // align-items: center;
    .logo{
      width: 80px;
      transform: translateY(2px);

      img{
        width: 100%;
      }
    }
    .SearchBar{
      width: calc(100% - 100px);
    }
  }
}

</style>