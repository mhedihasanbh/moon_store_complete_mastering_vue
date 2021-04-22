<template>
    <div>
        <div class="breadcrumb parallax-container">
            <div class="parallax"><img src="image/prlx.jpg" alt="#"></div>
            <h1 class="category-title">Desktops</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="category.html">Electronics</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageTittle",
        mounted() {
            $('.parallax').parallax();


        }


    }
</script>

<style scoped>

</style>