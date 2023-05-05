<script>
export default {
  name:'Card',

  props:{
    title: String,
    originTitle: String,
    lang: String,
    vote: Number,
    id: Number,
    poster: String,
  },

}
</script>

<template>

  <div class="card debug">
    <div class="info">
      <!-- title -->
          <p class="title">{{ title }}</p>
          <p class="origin_title">({{ originTitle }})</p>
      
      <!-- lang -->
          <img v-if=" lang == 'en'" src="../assets/en.png" alt="">
          <img v-else-if=" lang == 'it'" src="../assets/it.png" alt="">
          <p class="lang" v-else > {{ lang }}</p>

      <!-- vote -->
          <p class="vote"> 
            <span v-for="(star,index) in vote" :key="index" > * </span>
          </p>
    </div>

<!-- poster -->
    <img  class="poster" :src='"https://image.tmdb.org/t/p/w342" + poster'>
  </div>

</template>

<style lang="scss" scoped>
@use '../scss/var.scss' as *;
.card{
  position: relative;
  color: white;
  background-color: rgba(20, 20, 20, 0.7);
  width: 228px;
  height: 342px;
  margin: 10px;


  .info{
    padding: 10px;

    & :nth-child(n + 2) {
    margin-bottom: 10px;
    }
      .title{
        font-weight: 900;
      }
      .origin_title{
        font-size: 0.5rem;
        color: rgb(129, 129, 129)
      }
      .lang{}
      img{
        width: 20px;
      }
      .vote{
        color: rgb(255, 199, 139);
      }
  }

  .poster{
    display: block;
    top:0px;
    position: absolute;
    width: 228px;
    z-index: -1;
  }
}


</style>