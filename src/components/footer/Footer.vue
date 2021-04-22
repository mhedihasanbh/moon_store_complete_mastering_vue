<template>
    <div>
      <Subscribe/>
        <Brand/>
        <BottomFooter/>

    </div>
</template>

<script>
    import Subscribe from "./Subscribe";
    import Brand from "./Brand";
    import BottomFooter from "./BottomFooter";
    export default {
        name: "Footer",
        components:{Subscribe,Brand,BottomFooter}
    }
</script>

<style scoped>

</style>