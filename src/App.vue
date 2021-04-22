<template>
  <div id="app">
   <Header/>
      <Navbar/>
    <router-view/>
      <Footer/>
  </div>
</template>
<script>
  import Header from "./components/includes/Header";
  import Navbar from "./components/includes/Navbar";
  import Footer from "./components/footer/Footer";
  export default {
    name:'App',
    components:{Header,Navbar,Footer }
  }
</script>

<style>

</style>
