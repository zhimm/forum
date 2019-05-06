<template>
  <div id="app">
    <NavBar/>
    <router-view class="container" />
  </div>
</template>


<script>
import NavBar from '@/components/NavBar'

export default {

  components: {
    NavBar
  }
  
}
</script>

