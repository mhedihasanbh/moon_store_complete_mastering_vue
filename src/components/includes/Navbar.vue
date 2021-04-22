<template>
    <div>
        <nav id="menu" class="navbar">
            <div class="nav-inner">
                <div class="navbar-header"><span id="category" class="visible-xs">Categories</span>
                    <button type="button" class="btn btn-navbar navbar-toggle" ><i class="fa fa-bars"></i></button>
                </div>
                <div class="navbar-collapse">
                    <ul class="main-navigation">
                        <li><router-link :to="{name:'Home'}"   class="parent"  >Home</router-link> </li>
                        <li><router-link :to="{name:'category-product'}"   class="parent"  >Collection</router-link> </li>


                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>