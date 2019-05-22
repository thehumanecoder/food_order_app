<template>
<div class="ironman">
  <router-view></router-view>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
.ironman{
  height:100%;
}
</style>