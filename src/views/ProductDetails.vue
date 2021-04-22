<template>
    <div>
        <PageTittle/>
        <div class="container">
            <div class="row">
                <div class="content col-sm-12">
                    <ProductBasic/>
                    <ProductDescraption/>
                    <RelatedProduct/>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageTittle from "../components/includes/PageTittle";
   import ProductBasic from "../components/productDetail/ProductBasic";
    import ProductDescraption from "../components/productDetail/ProductDescraption";
    import RelatedProduct from "../components/productDetail/RelatedProduct";

    export default {
        name: "productDetails",
        components:{ PageTittle,ProductBasic,ProductDescraption,RelatedProduct}
    }
</script>

<style scoped>

</style>