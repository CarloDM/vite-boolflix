<script>
import {store} from '../data/store';
export default {
  name:'Card',
  data(){
    return{
      store,
    } 
  },

  props:{
    title: String,
    originTitle: String,
    lang: String,
    vote: Number,
    description: String,
    id: Number,
    fIndex: Number,
    sIndex: Number,
    poster: String,
  },
  methods:{
    nextPage(){
      if (store.pageInfo > 0){
        store.pageInfo = 0;
        console.log('next', store.pageInfo)
      }else{
        store.pageInfo ++;
        console.log('next',  store.pageInfo)
      }
    }
  }

}
</script>

<template>

  <div @click="nextPage()" class="card">
    
<!-- poster -->
<img  class="poster" :src='"https://image.tmdb.org/t/p/w342" + poster'>

    <div class="info">
      <div class="page1" :class='{"d_none" : store.pageInfo === 0}' >
      
      <!-- title -->
      <p class="title">{{ title }}</p>
      <p class="origin_title">({{ originTitle }})</p>
      
      <!-- lang -->
      <img v-if=" lang == 'en'" src="../assets/en.png" alt="">
      <img v-else-if=" lang == 'it'" src="../assets/it.png" alt="">
      <p class="lang" v-else > {{ lang }}</p>
      
      <!-- vote -->
      <p class="vote"> 
        <span v-if="vote" v-for="(star,index) in vote" :key="index" > * </span>
      </p>
      
      <p class="description">{{ description }}</p>

      </div>

      <div class="page2" :class='{"d_none" : store.pageInfo === 1}' >
        <ul>

          <li 
            v-for="(genre,ind) in store.filmsGeneres[fIndex]" :key="ind"
            class="generes">
            {{ genre.name }}
          </li>
    
          <li 
            v-for="(genre,ind) in store.tvGeneres[sIndex]" :key="ind"
            class="generes">
            {{ genre.name }}
          </li>

        </ul>
      </div>

      </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../scss/var.scss' as *;
.card{
  position: relative;
  color: white;
  background-color: rgba(20, 20, 20, 0.0);
  box-shadow: 0px 0px 5px rgba(91, 91, 91, 0.9);
  border-radius: 3px;
  width: 228px;
  height: 342px;
  margin: 10px;
  transition: all 2.25s ease;
  overflow: hidden;

  &:hover{
    transition: all 0.25s ease-out;
    background-color: rgba(20, 20, 20, 0.8);
    box-shadow: 0px 0px 8px rgba(133, 133, 133, 0.955);
  }
  &:hover .info{
    transition: all 0.20s ease-out;
    opacity: 1;
  }
  .info{
    padding: 10px;
    opacity: 0;
    transition: all 1.20s ease-out;
    & :nth-child(n + 2) :not(li){
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
    z-index: -1;
  }
  .d_none{
    display: none;
  }
}


</style>