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
    <p>lingua: {{ lang }}</p>
    <p>voto: {{ vote }}</p>
    <p>id:{{ id }}</p>
  </div>
</template>


<style>

</style>