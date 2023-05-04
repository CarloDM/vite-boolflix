<script>
export default {
  name:'Card',

  props:{
    title: String,
    originTitle: String,
    leng: String,
    vote: String,
  },

}
</script>

<template>
  <div class="card debug">
    <p>titolo:</p>
    <p>titolo originale:</p>
    <p>lingua:</p>
    <p>voto:</p>
  </div>
</template>


<style>

</style>