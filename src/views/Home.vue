<template>
  <div class="home">
  <Slider/>
    <Banner/>
    <BestLook/>
    <Testimonial/>
    <FeatureProduct/>


  </div>
</template>

<script>
import Slider from "../components/home/Slider";
import Banner from "../components/home/Banner";
import BestLook from "../components/home/BestLook";
import Testimonial from "../components/home/Testimonial";
import FeatureProduct from "../components/home/FeatureProduct";


export default {
  name: 'Home',
  created() {
    document.title="Home-New Online Shop Center";
  },
  components: {Slider,Banner,BestLook,Testimonial ,FeatureProduct }
}
</script>
