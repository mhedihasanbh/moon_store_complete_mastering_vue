<template>
    <div>
        <PageTittle/>
        <div class="container">
            <div class="row">
                <CategoryLeft/>
                <CategoryRight/>
            </div>
        </div>



    </div>
</template>

<script>
    import PageTittle from "../components/includes/PageTittle";
    import CategoryLeft from "../components/category/CategoryLeft";
    import CategoryRight from "../components/category/CategoryRight";

    export default {
        name: "Category",
        components:{PageTittle,CategoryLeft,CategoryRight}
    }
</script>

<style scoped>

</style>