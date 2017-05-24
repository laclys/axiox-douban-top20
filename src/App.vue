<template>
  <div id="app">
    <p>{{msg}}</p>
    <author></author>
    <router-link to="/test01">Go to 01</router-link>
    <router-link to="/test02">Go to 02</router-link>
    <hr>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <hr>
    <rank></rank>
  </div>
</template>

<script>
  import author from './components/author.vue';
  import rank from './components/rank.vue';
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      author,
      rank
    }
  }
</script>

<style>

</style>