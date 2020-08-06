<template>
  <div id="app">
    <NavBar />
    <b-container>
    <router-view/>
    </b-container>
    <Footer />
  </div>
</template>


<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export default {
  components:{
      NavBar,
      Footer
  }
}
</script>

<style>


</style>
