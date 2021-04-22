<template>
    <div>
        <div class="productinfo-tab">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#tab-description" data-toggle="tab">Description</a></li>
                <li><a href="#tab-review" data-toggle="tab">Reviews (1)</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab-description">
                    <div class="cpt_product_description ">
                        <div>
                            <p> <strong>More room to move.</strong></p>
                            <p> With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.</p>
                            <p> <strong>Cover Flow.</strong></p>
                            <p> Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list.</p>
                            <p> <strong>Enhanced interface.</strong></p>
                            <p> Experience a whole new way to browse and view your music and video.</p>
                            <p> <strong>Sleeker design.</strong></p>
                            <p> Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polished stainless steel enclosure with rounded edges.</p>
                        </div>
                    </div>
                    <!-- cpt_container_end --></div>
                <div class="tab-pane" id="tab-review">
                    <form class="form-horizontal">
                        <div id="review"></div>
                        <h2>Write a review</h2>
                        <div class="form-group required">
                            <div class="col-sm-12">
                                <label class="control-label" for="input-name">Your Name</label>
                                <input type="text" name="name" value="" id="input-name" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group required">
                            <div class="col-sm-12">
                                <label class="control-label" for="input-review">Your Review</label>
                                <textarea name="text" rows="5" id="input-review" class="form-control"></textarea>
                                <div class="help-block"><span class="text-danger">Note:</span> HTML is not translated!</div>
                            </div>
                        </div>
                        <div class="form-group required">
                            <div class="col-sm-12">
                                <label class="control-label">Rating</label>
                                &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                <input type="radio" name="rating" value="1" />
                                &nbsp;
                                <input type="radio" name="rating" value="2" />
                                &nbsp;
                                <input type="radio" name="rating" value="3" />
                                &nbsp;
                                <input type="radio" name="rating" value="4" />
                                &nbsp;
                                <input type="radio" name="rating" value="5" />
                                &nbsp;Good</div>
                        </div>
                        <div class="buttons clearfix">
                            <div class="pull-right">
                                <button type="button" id="button-review" data-loading-text="Loading..." class="btn btn-primary">Continue</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductDescraption"
    }
</script>

<style scoped>

</style>