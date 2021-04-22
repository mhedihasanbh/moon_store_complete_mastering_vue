<template>
    <div class="categoryRight">



        <div class=" content col-sm-9">
            <div class="category-page-wrapper">
                <div class="col-md-2 text-right sort-wrapper">
                    <label class="control-label" for="input-sort">Sort By :</label>
                    <div class="sort-inner">
                        <select id="input-sort" class="form-control">
                            <option value="ASC" selected="selected">Default</option>
                            <option value="ASC">Name (A - Z)</option>
                            <option value="DESC">Name (Z - A)</option>
                            <option value="ASC">Price (Low &gt; High)</option>
                            <option value="DESC">Price (High &gt; Low)</option>
                            <option value="DESC">Rating (Highest)</option>
                            <option value="ASC">Rating (Lowest)</option>
                            <option value="ASC">Model (A - Z)</option>
                            <option value="DESC">Model (Z - A)</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-1 text-right page-wrapper">
                    <label class="control-label" for="input-limit">Show :</label>
                    <div class="limit">
                        <select id="input-limit" class="form-control">
                            <option value="8" selected="selected">08</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6 list-grid-wrapper"> <a href="#" id="compare-total">Product Compare (0)</a>
                    <div class="btn-group btn-list-grid">
                        <button type="button" id="list-view" class="btn btn-default list" data-toggle="tooltip" title="List"></button>
                        <button type="button" id="grid-view" class="btn btn-default grid" data-toggle="tooltip" title="Grid"></button>
                    </div>
                </div>
            </div>
            <br />
            <div class="grid-list-wrapper">
                <div class="product-layout product-list col-xs-12">
                    <div class="product-thumb">
                        <div class="image product-imageblock">
                            <router-link :to="{name:'productDetails'}">
                                <img src="image/product/Pro-04.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                                <img src="image/product/Pro-04-1.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                            </router-link>
                            <ul class="button-group grid-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" title="Add to Cart">Add to Cart</button>
                                </li>
                            </ul>
                        </div>
                        <div class="caption product-detail">
                            <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                            <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                            <p class="price product-price">$122.00<span class="price-tax">Ex Tax: $100.00</span></p>
                            <p class="product-desc"> More room to move.

                                With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                                Cover Flow.

                                Browse through your music collection by flipping..</p>
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product-layout product-list col-xs-12">
                    <div class="product-thumb">
                        <div class="image product-imageblock"> <a href="product.html">
                            <img src="image/product/Pro-03.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                            <img src="image/product/Pro-03-1.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                        </a>
                            <ul class="button-group grid-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                </li>
                            </ul>
                        </div>
                        <div class="caption product-detail">
                            <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                            <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                            <p class="price product-price">$122.00<span class="price-tax">Ex Tax: $100.00</span></p>
                            <p class="product-desc"> More room to move.

                                With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                                Cover Flow.

                                Browse through your music collection by flipping..</p>
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product-layout product-list col-xs-12">
                    <div class="product-thumb">
                        <div class="image product-imageblock"> <a href="product.html">
                            <img src="image/product/Pro-06.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                            <img src="image/product/Pro-06-1.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                        </a>
                            <ul class="button-group grid-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                </li>
                            </ul>
                        </div>
                        <div class="caption product-detail">
                            <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                            <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                            <p class="price product-price">$122.00<span class="price-tax">Ex Tax: $100.00</span></p>
                            <p class="product-desc"> More room to move.

                                With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                                Cover Flow.

                                Browse through your music collection by flipping..</p>
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product-layout product-list col-xs-12">
                    <div class="product-thumb">
                        <div class="image product-imageblock"> <a href="product.html">
                            <img src="image/product/Pro-07.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                            <img src="image/product/Pro-07-1.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                        </a>
                            <ul class="button-group grid-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                </li>
                            </ul>
                        </div>
                        <div class="caption product-detail">
                            <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                            <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                            <p class="price product-price">$122.00<span class="price-tax">Ex Tax: $100.00</span></p>
                            <p class="product-desc"> More room to move.

                                With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                                Cover Flow.

                                Browse through your music collection by flipping..</p>
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product-layout product-list col-xs-12">
                    <div class="product-thumb">
                        <div class="image product-imageblock"> <a href="product.html">
                            <img src="image/product/Pro-08.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                            <img src="image/product/Pro-08-1.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                        </a>
                            <ul class="button-group grid-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                </li>
                            </ul>
                        </div>
                        <div class="caption product-detail">
                            <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                            <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                            <p class="price product-price">$122.00<span class="price-tax">Ex Tax: $100.00</span></p>
                            <p class="product-desc"> More room to move.

                                With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                                Cover Flow.

                                Browse through your music collection by flipping..</p>
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product-layout product-list col-xs-12">
                    <div class="product-thumb">
                        <div class="image product-imageblock"> <a href="product.html">
                            <img src="image/product/Pro-09.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                            <img src="image/product/Pro-09-1.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                        </a>
                            <ul class="button-group grid-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                </li>
                            </ul>
                        </div>
                        <div class="caption product-detail">
                            <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                            <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                            <p class="price product-price">$122.00<span class="price-tax">Ex Tax: $100.00</span></p>
                            <p class="product-desc"> More room to move.

                                With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                                Cover Flow.

                                Browse through your music collection by flipping..</p>
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product-layout product-list col-xs-12">
                    <div class="product-thumb">
                        <div class="image product-imageblock"> <a href="product.html">
                            <img src="image/product/Pro-010.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                            <img src="image/product/Pro-010-1.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                        </a>
                            <ul class="button-group grid-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                </li>
                            </ul>
                        </div>
                        <div class="caption product-detail">
                            <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                            <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                            <p class="price product-price">$122.00<span class="price-tax">Ex Tax: $100.00</span></p>
                            <p class="product-desc"> More room to move.

                                With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                                Cover Flow.

                                Browse through your music collection by flipping..</p>
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product-layout product-list col-xs-12">
                    <div class="product-thumb">
                        <div class="image product-imageblock"> <a href="product.html">
                            <img src="image/product/Pro-01.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                            <img src="image/product/Pro-01-1.jpg" alt="iPod Classic" title="iPod Classic" class="img-responsive" />
                        </a>
                            <ul class="button-group grid-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                </li>
                            </ul>
                        </div>
                        <div class="caption product-detail">
                            <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                            <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                            <p class="price product-price">$122.00<span class="price-tax">Ex Tax: $100.00</span></p>
                            <p class="product-desc"> More room to move.

                                With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.

                                Cover Flow.

                                Browse through your music collection by flipping..</p>
                            <ul class="button-group list-btn">
                                <li>
                                    <button type="button" class="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i class="fa fa-exchange"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                                </li>
                                <li>
                                    <button type="button" class="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i class="fa fa-shopping-bag"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category-page-wrapper">
                <div class="result-inner">Showing 1 to 8 of 10 (2 Pages)</div>
                <div class="pagination-inner">
                    <ul class="pagination">
                        <li class="active"><span>1</span></li>
                        <li><a href="category.html">2</a></li>
                        <li><a href="category.html">&gt;</a></li>
                        <li><a href="category.html">&gt;|</a></li>
                    </ul>
                </div>
               </div>
               </div>
            </div>
</template>

<script>
    export default {
        name: "CategoryRight",
        mounted() {
           var cols1 = $('#column-right, #column-left').length;

            if (cols1 == 2) {
                $('#content .product-layout:nth-child(2n+1)').after('<div class="clearfix visible-md visible-sm"></div>');
            } else if (cols1 == 1) {
                $('#content .product-layout:nth-child(3n+3)').after('<div class="clearfix visible-lg"></div>');
            } else {
                $('#content .product-layout:nth-child(4n+4)').after('<div class="clearfix"></div>');
            }

            

            $('#list-view').click(function() {
                $('.product-layout > .clearfix').remove();

                $('.product-layout').attr('class', 'product-layout product-list col-xs-12');

                localStorage.setItem('display', 'list');
                $('.product-name:parent').each(function () {
                    $(this).insertBefore($(this).prev('.rating'));
                });
            });

            // Product Grid
            $('#grid-view').click(function() {
                $('.product-layout > .clearfix').remove();

               var cols = $('#column-right, #column-left').length;

                if (cols == 2) {
                    $('.product-layout').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
                    $('.left-sidebar-widget .product-layout').attr('class', 'product-layout product-grid col-xs-12');

                } else if (cols == 1) {
                    $('.product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
                    $('.left-sidebar-widget .product-layout').attr('class', 'product-layout product-grid col-xs-12');

                } else {
                    $('.product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
                    $('.left-sidebar-widget .product-layout').attr('class', 'product-layout product-grid col-xs-12');

                }

                localStorage.setItem('display', 'grid');
                $('.rating:parent').each(function () {
                    $(this).insertBefore($(this).prev('.product-name'));
                });
            });

            if (localStorage.getItem('display') == 'list') {
                $('#list-view').trigger('click');
            } else {
                $('#grid-view').trigger('click');
            }

            $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

            $(document).ajaxStop(function() {
                $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
            });
            function gridlistactive(){

                $('.btn-list-grid button').on('click', function() {

                    if($(this).hasClass('grid')) {

                        $('.btn-list-grid button').addClass('active');

                        $('.btn-list-grid button.list').removeClass('active');

                    }

                    else if($(this).hasClass('list')) {

                        $('.btn-list-grid button').addClass('active');

                        $('.btn-list-grid button.grid').removeClass('active');

                    }

                });

            }
            gridlistactive();
        }
    }
</script>

<style scoped>

</style>