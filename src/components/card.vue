<script>
export default {
  name:'Card',

  props:{
    title: String,
    originTitle: String,
    lang: String,
    vote: Number,
    id: Number,
  },

}
</script>

<template>
  <div class="card debug">
    <p>titolo: {{ title }}</p>
    <p>titolo originale: {{ originTitle }}</p>

    <img v-if=" lang == 'en'"
      src="../assets/en.png" alt="">
    <img v-if=" lang == 'it'"
      src="../assets/it.png" alt="">
    <p v-else > {{ lang }}</p>
    
    <p>voto: {{ vote }}</p>
    <p>id:{{ id }}</p>
  </div>
</template>


<style lang="scss" scoped>
img{
  width: 20px;
}

</style>