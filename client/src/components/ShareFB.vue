<template>
  <div class="fb-share-button" 
  data-href="https://www.lifewire.com/best-real-time-strategy-pc-games-4145806"
  data-layout="button" 
  data-size="large" 
  data-mobile-iframe="true">
  <i class="icon facebook f"></i>
  <a class="fb-xfbml-parse-ignore" 
  target="_blank" 
  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">
  Share</a>
  </div>
</template>

<script>
export default {
  name: 'FBShare',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fb-share-button {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #4267b2;
    color: #fff;
    cursor: pointer;
    /* width: 177.59px; */
  }

  a {
    color: #fff;
  }
</style>
