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
    <p>titolo: {{ title }}</p>
    <p>titolo originale: {{ originTitle }}</p>

    <img v-if=" lang == 'en'"
      src="../assets/en.png" alt="">
    <img v-else-if=" lang == 'it'"
      src="../assets/it.png" alt="">
    <p v-else > {{ lang }}</p>

    <p>voto: 
      <span v-for="(star,index) in vote" :key="index" > * </span>
    </p>

    <!-- <p>id:{{ id }}</p> -->

    <img :src='"https://image.tmdb.org/t/p/w300" + poster' alt="" class="poster">
  </div>
</template>


<style lang="scss" scoped>
img{
  width: 20px;
}

.poster{
  display: block;
  width: 200px;
}

</style>