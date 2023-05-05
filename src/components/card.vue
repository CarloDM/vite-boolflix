<script>
export default {
  name:'Card',

  props:{
    title: String,
    originTitle: String,
    lang: String,
    vote: Number,
    description: String,
    id: Number,
    poster: String,
  },

}
</script>

<template>

  <div class="card">
    
<!-- poster -->
<img  class="poster" :src='"https://image.tmdb.org/t/p/w342" + poster'>

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

          <p class="description">{{ description }}</p>
    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../scss/var.scss' as *;
.card{
  position: relative;
  color: white;
  background-color: rgba(20, 20, 20, 0.0);
  box-shadow: 0px 0px 5px rgba(133, 133, 133, 0.51);
  width: 228px;
  height: 342px;
  margin: 10px;
  transition: all 0.25s ease-out;
  overflow: hidden;
  &:hover .poster{
    z-index: -1;
  }
  &:hover{
    background-color: rgba(20, 20, 20, 0.7);
    box-shadow: 0px 0px 8px rgba(67, 67, 67, 0.955);
  }
  &:hover .info{
    opacity: 1;
  }
  .info{
    padding: 10px;
    opacity: 0;
    transition: all 0.20s ease-out;
    & :nth-child(n + 2) {
      margin-bottom: 10px;
    }
      .title{
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.3rem;
      }
      .origin_title{
        font-size: 0.7rem;
        line-height: 0.8rem;
        color: rgb(129, 129, 129)
      }
      .lang{}
      img{
        width: 20px;
      }
      .vote{
        color: rgb(255, 199, 139);
      }
      .description{
        font-family: 'Special Elite';
        font-size: 0.8rem;
        line-height: 1rem;
        color: rgb(216, 216, 216)
      }
  }

  .poster{
    display: block;
    top:0px;
    position: absolute;
    width: 228px;
    z-index: 0;
  }
}


</style>