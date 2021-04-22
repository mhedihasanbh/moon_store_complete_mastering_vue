<template>
    <div class="ProductBasic">
        <div class="row">
            <div class="col-sm-5">
                <div class="thumbnails">
                    <div><a class="thumbnail fancybox" href="image/product/product8.jpg" title="Casual Shirt With Ruffle Hem"><img src="image/product/product1.jpg" title="Casual Shirt With Ruffle Hem" alt="iPod Classic" /></a></div>
                    <div id="product-thumbnail" class="owl-carousel">
                        <div class="item">
                            <div class="image-additional"><a class="thumbnail fancybox" href="image/product/product1.jpg" title="iPod Classic"> <img src="image/product/Pro-09.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                        </div>
                        <div class="item">
                            <div class="image-additional"><a class="thumbnail fancybox" href="image/product/product2.jpg" title="iPod Classic"> <img src="image/product/Pro-02.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                        </div>
                        <div class="item">
                            <div class="image-additional"><a class="thumbnail fancybox" href="image/product/product3.jpg" title="iPod Classic"> <img src="image/product/Pro-05.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                        </div>
                        <div class="item">
                            <div class="image-additional"><a class="thumbnail fancybox" href="image/product/product4.jpg" title="iPod Classic"> <img src="image/product/Pro-08.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                        </div>
                        <div class="item">
                            <div class="image-additional"><a class="thumbnail fancybox" href="image/product/product5.jpg" title="iPod Classic"> <img src="image/product/Pro-06.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                        </div>
                        <div class="item">
                            <div class="image-additional"><a class="thumbnail fancybox" href="image/product/product6.jpg" title="iPod Classic"> <img src="image/product/Pro-04.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                        </div>
                        <div class="item">
                            <div class="image-additional"><a class="thumbnail fancybox" href="image/product/product7.jpg" title="iPod Classic"> <img src="image/product/Pro-09.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-7 prodetail">
                <h1 class="productpage-title">Casual Shirt With Ruffle Hem</h1>
                <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="riview"><a href="#">1 reviews</a> / <a href="#">Write a review</a></span> </div>
                <ul class="list-unstyled productinfo-details-top">
                    <li>
                        <h2 class="productpage-price">$122.00</h2>
                    </li>
                    <li><span class="productinfo-tax">Ex Tax: $100.00</span></li>
                </ul>
                <hr>
                <ul class="list-unstyled product_info">
                    <li>
                        <label>Brand:</label>
                        <span> <a href="#">Apple</a></span></li>
                    <li>
                        <label>Product Code:</label>
                        <span> product 20</span></li>
                    <li>
                        <label>Availability:</label>
                        <span> In Stock</span></li>
                </ul>
                <hr>
                <p class="product-desc"> More room to move.
                    With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.
                    Cover Flow.
                    Browse through your music collection by flipping..</p>
                <div id="product">
                    <div class="form-group">
                        <div class="row">
                            <div class="Sort-by col-md-6">
                                <label>Sort by</label>
                                <select id="select-by-size" class="selectpicker form-control">
                                    <option value="#" selected="selected">Small</option>
                                    <option value="#">Medium</option>
                                    <option value="#">Large</option>
                                </select>
                            </div>
                            <div class="Color col-md-6">
                                <label>Color</label>
                                <select id="select-by-color" class="selectpicker form-control">
                                    <option value="#" selected="selected">Blue</option>
                                    <option value="#">Green</option>
                                    <option value="#">Orange</option>
                                    <option value="#">White</option>
                                </select>
                            </div>
                        </div>
                        <div class="qty">
                            <label>Qty</label>
                            <input id="qty" placeholder="1" type="number">
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>

</template>

<script>
    export default {
        name: "ProductBasic",
        mounted() {
            $('#product-thumbnail').owlCarousel({
                navigation: true,
                pagination: false,
                itemsDesktop : [1199, 4],
                itemsDesktopSmall : [979, 3],
                itemsTablet : [768, 4],
                itemsTabletSmall : false,
                itemsMobile : [479, 3]
            });

        }
    }
</script>

<style scoped>

</style>