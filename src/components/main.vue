<script>
import {store} from '../data/store.js';
import Card from './card.vue';


export default {
  name: 'Main',
  components:{
    Card,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    approximateVote(vote){
      console.log('approximate Vote')
      const voteOnFive = (vote / 10) * 5
      return Math.ceil(voteOnFive) 
    }
  }
}
</script>

<template>
  <main>

    <!-- <SearchBar @cerca="$emit('ricerca')" @tranding="$emit('tranding')" /> -->
    <div class="cards_container">
      
      <Card v-for="(card, index) in store.films" :key='index'
      :title="card.title"
      :originTitle="card.original_title"
      :lang="card.original_language"
      :vote="approximateVote(card.vote_average)"
      :description="card.overview"
      :id="card.id"
      :poster="card.poster_path"
      />
    
      <Card v-for="(card, index) in store.tv" :key='index'
      :title="card.name"
      :originTitle="card.original_name"
      :lang="card.original_language"
      :vote="approximateVote(card.vote_average)"
      :description="card.overview"
      :id="card.id"
      :poster="card.poster_path"
      />
    </div> 
    
  </main>
</template>

<style lang="scss" scoped>

  main{
    height: 100%;

  }
  .cards_container{
    width: 95%;
    height: 95%;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
  }

</style>