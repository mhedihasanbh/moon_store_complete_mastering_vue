<template>
    <div>
        <div class="parallax-container">
            <div class="parallax"><img src="image/prlx.jpg" alt="#"></div>
            <div class="container">
                <ul id="testimonial" class="row owl-carousel product-slider">
                    <li class="item">
                        <div class="panel-default">
                            <div class="testimonial-image z-depth-5"><img src="image/t1.png" alt="#"></div>
                            <div class="testimonial-name">
                                <h2>Janet Wilson</h2>
                            </div>
                            <div class="testimonial-designation">
                                <p>Web Designer</p>
                            </div>
                            <div class="testimonial-desc">Rem ipsum doLoremRem ipsum doLorem ipsum ipsum doLorem ipsum  ut labore et dolore ma ipsum ut labore etdolore ipsum doLorem ipsum ut labore et dolore mamagna. Lorem ipsumut labore et dolore mamagna. Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipisicing.</div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="panel-default">
                            <div class="testimonial-image"><img src="image/t2.png" alt="#"></div>
                            <div class="testimonial-name">
                                <h2>Linda Howard</h2>
                            </div>
                            <div class="testimonial-designation">
                                <p>Web Deweloper</p>
                            </div>
                            <div class="testimonial-desc">Rem ipsum doLoremRem ipsum doLorem ipsum ipsum doLorem ipsum  ut labore et dolore ma ipsum ut labore etdolore ipsum doLorem ipsum ut labore et dolore mamagna. Lorem ipsumut labore et dolore mamagna. Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipisicing.</div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="panel-default">
                            <div class="testimonial-image"><img src="image/t3.png" alt="#"></div>
                            <div class="testimonial-name">
                                <h2>Janet Wilson</h2>
                            </div>
                            <div class="testimonial-designation">
                                <p>Web Designer</p>
                            </div>
                            <div class="testimonial-desc">Rem ipsum doLoremRem ipsum doLorem ipsum ipsum doLorem ipsum  ut labore et dolore ma ipsum ut labore etdolore ipsum doLorem ipsum ut labore et dolore mamagna. Lorem ipsumut labore et dolore mamagna. Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipisicing.</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Testimonial",
        mounted() {
            ('.parallax').parallax();
            ('#testimonial').owlCarousel({
                items: 1,
                autoPlay: true,
                navigation: false,
                pagination: true,

                itemsDesktop : [1199, 1],
                itemsDesktopSmall : [979, 1],
                itemsTablet : [768, 1]
            });
        }
    }
</script>

<style scoped>

</style>