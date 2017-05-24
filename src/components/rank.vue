<template>
  <div id="rank">
    <ul>
      <li v-for="article in articles">
        <p>豆瓣top250:</p>
        {{article.title}}
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        articles: []
      }
    },
    mounted: function () {
      axios.get('/api/movie/top250')
        .then((result) => {
          console.log(result);
          this.articles = result.data.subjects;
        });
    }
  }

</script>
<style>


</style>
