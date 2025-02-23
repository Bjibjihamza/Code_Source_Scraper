/************************************************************* Magento class **************************************************************************/

jQuery.noConflict();

jQuery(document).ready(function() {



 



 


jQuery("#menu_header li.parent").hover(
  function() { 
        caleur_back = jQuery(this).find( "a.menu_parent > span" ).css("background-color"); 
        jQuery(this).find('> a.menu_parent').css({"background-color":caleur_back,'color': '#fff'}); 
  }, function() {
        jQuery(this).find('> a.menu_parent').css({"background-color":'rgb(255, 255, 255)','color': '#767676'});
  }
);



        



            if(jQuery("#switcherhomepage").length){  
                jQuery('#switcherhomepage').owlCarousel
                    ({
                        items:1,
                        nav:true, 
                        dots: false 
                    });
             }


            jQuery('.list-produits-list-home-carrosel').each(function(){ 
                    jQuery(jQuery(this)).owlCarousel
                     ({
                        loop:true,
                        margin:10,
                        responsiveClass:true,
                        navText:['<a id="carousel-category-prev_home" class="carousel-prev fa fa-angle-left"></a>','<a class="carousel-next fa fa-angle-right"  id="carousel-category-prev_home"></a></div>'],
                        responsive:{

                            0:{
                                items:2,
                                nav:true,
                                dots: false
                            }, 
                            600:{
                                items:4,
                                nav:true,
                                pagination: false,
                                dots: false
                            },
                            1000:{
                                items:5,
                                nav:true,
                                loop:false,
                                pagination: true,
                                dots: false
                            }
                        }
                    }); 
            });


		



            if(jQuery("#item_category_liste_home").length){ 

                jQuery('#item_category_liste_home').owlCarousel

                 ({

                    loop:true,

                    margin:10,

                    responsiveClass:true,

                    navText:['<a id="carousel-category-prev_home" class="carousel-prev fa fa-angle-left"></a>','<a class="carousel-next fa fa-angle-right"  id="carousel-category-prev_home"></a></div>'],

 

                    responsive:{

                        0:{

                            items:1,

                            nav:true,

                            dots: false

                        }, 

                        600:{

                            items:4,

                            nav:true,

                            pagination: false,

                            dots: false

                        },

                        1000:{

                            items:5,

                            nav:true,

                            loop:false,

                            pagination: true,

                            dots: false

                        }

                    }

                }); 



            }




	

 			if(jQuery("#list_promo_produits").length){  

 				var owlCarouselpromo = jQuery('#list_promo_produits').owlCarousel

							 				 ({

											    loop:true,

											    margin:10,

											    responsiveClass:true,

											    navText:['<a id="carousel-prev_promo" class="carousel-prev fa fa-angle-left"></a>','<a class="carousel-next fa fa-angle-right"  id="carousel-next_promo"></a></div>'],

							 

											    responsive:{

											        0:{

											            items:1,

											            nav:true,

											            dots: false

											        }, 

											        600:{

											            items:1,

											            nav:false,

											            pagination: false,

											            dots: false

											        },

											        1000:{

											            items:3,

											            nav:true,

											            loop:false,

											            pagination: false,

											            dots: false

											        }

											    }

											});  

 			var owlCarousel = jQuery('#list_promo_produits').data('owl.carousel');

					owlCarousel.remove(1); 





 			};



 			if(jQuery("#list_nouveaux_produits").length){ 

 				jQuery('#list_nouveaux_produits').owlCarousel

 				 ({

				    loop:true,

				    margin:10,

				    responsiveClass:true,

				    navText:['<a id="carousel-prev_home" class="carousel-prev fa fa-angle-left"></a>','<a class="carousel-next fa fa-angle-right"  id="carousel-prev_home"></a></div>'],

 

				    responsive:{

				        0:{

				            items:1,

				            nav:true,

				            dots: false

				        }, 

				        600:{

				            items:1,

				            nav:false,

				            pagination: false,

				            dots: false

				        },

				        1000:{

				            items:4,

				            nav:true,

				            loop:false,

				            pagination: false,

				            dots: false

				        }

				    }

				}); 



 			}



  

 

 

	 

		jQuery(".showall").on('click',function(){

			if(jQuery(this).parent().hasClass('showallcat')){

				jQuery(this).parent().removeClass("showallcat");

				jQuery(this).text('> VOIR PLUS');

			}else{

				jQuery(this).parent().addClass("showallcat");

				jQuery(this).text('> MOINS');

			}

		});







/**********************************************************************back-top*****************************************************************************/

		jQuery(function () {

		 jQuery(window).scroll(function () {

		  if (jQuery(this).scrollTop() > 100) {

		   jQuery('#back-top').fadeIn();

		  } else {

		   jQuery('#back-top').fadeOut();

		  }

		 });



		 // scroll body to 0px on click

		 jQuery('#back-top a').click(function () {

		  jQuery('body,html').stop(false, false).animate({

		   scrollTop: 0

		  }, 800);

		  return false;

		 });

		});







    // =============================================

    // Skip Links

    // =============================================



    var skipContents = jQuery('.skip-content');

    var skipLinks    = jQuery('.skip-link');



    skipLinks.on('click', function (e) {

        e.preventDefault();



        var self = jQuery(this);

        // Use the data-target-element attribute, if it exists. Fall back to href.

        var target = self.attr('data-target-element') ? self.attr('data-target-element') : self.attr('href');



        // Get target element

        var elem = jQuery(target);



        // Check if stub is open

        var isSkipContentOpen = elem.hasClass('skip-active') ? 1 : 0;

        console.log(skipContents)

        // Hide all stubs

        skipLinks.removeClass('skip-active');

        skipContents.removeClass('skip-active');



        // Toggle stubs

        if (isSkipContentOpen) {

            self.removeClass('skip-active');

        } else {

            self.addClass('skip-active');

            elem.addClass('skip-active');

        }

    });



    jQuery('#header-cart').on('click', '.skip-link-close', function(e) {

        var parent = jQuery(this).parents('.skip-content');

        var link = parent.siblings('.skip-link');



        parent.removeClass('skip-active');

        link.removeClass('skip-active');



        e.preventDefault();

    });




 Modernizr.addTest('ios', function () {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    });
 
 ProductMediaManager.init();


});		 

// ==============================================
// PDP - image zoom - needs to be available outside document.ready scope
// ==============================================
var bp = {
    xsmall: 479,
    small: 599,
    medium: 770,
    large: 979,
    xlarge: 1199
};
 

var ProductMediaManager = {
    IMAGE_ZOOM_THRESHOLD: 10,
    imageWrapper: null,

    destroyZoom: function() {
        jQuery('.zoomContainer').remove();
        jQuery('.product-image-gallery .gallery-image').removeData('elevateZoom');
    },

    createZoom: function(image) {
        // Destroy since zoom shouldn't be enabled under certain conditions
        ProductMediaManager.destroyZoom();

        if(
            // Don't use zoom on devices where touch has been used
            PointerManager.getPointer() == PointerManager.TOUCH_POINTER_TYPE
            // Don't use zoom when screen is small, or else zoom window shows outside body
            || Modernizr.mq("screen and (max-width:" + bp.medium + "px)")
        ) {
            return; // zoom not enabled
        }

        if(image.length <= 0) { //no image found
            return;
        }

        if(image[0].naturalWidth && image[0].naturalHeight) {
            var widthDiff = image[0].naturalWidth - image.width() - ProductMediaManager.IMAGE_ZOOM_THRESHOLD;
            var heightDiff = image[0].naturalHeight - image.height() - ProductMediaManager.IMAGE_ZOOM_THRESHOLD;

            if(widthDiff < 0 && heightDiff < 0) {
                //image not big enough

                image.parents('.product-image').removeClass('zoom-available');

                return;
            } else {
                image.parents('.product-image').addClass('zoom-available');
            }
        }

        image.elevateZoom();
    },

    swapImage: function(targetImage) {
        targetImage = jQuery(targetImage);
        targetImage.addClass('gallery-image');

        ProductMediaManager.destroyZoom();

        var imageGallery = jQuery('.product-image-gallery');

        if(targetImage[0].complete) { //image already loaded -- swap immediately

            imageGallery.find('.gallery-image').removeClass('visible');

            //move target image to correct place, in case it's necessary
            imageGallery.append(targetImage);

            //reveal new image
            targetImage.addClass('visible');

            //wire zoom on new image
            ProductMediaManager.createZoom(targetImage);

        } else { //need to wait for image to load

            //add spinner
            imageGallery.addClass('loading');

            //move target image to correct place, in case it's necessary
            imageGallery.append(targetImage);

            //wait until image is loaded
            imagesLoaded(targetImage, function() {
                //remove spinner
                imageGallery.removeClass('loading');

                //hide old image
                imageGallery.find('.gallery-image').removeClass('visible');

                //reveal new image
                targetImage.addClass('visible');

                //wire zoom on new image
                ProductMediaManager.createZoom(targetImage);
            });

        }
    },

    wireThumbnails: function() {
        //trigger image change event on thumbnail click
        jQuery('.product-image-thumbs .thumb-link').click(function(e) {
            e.preventDefault();
            var jlink = jQuery(this);
            var target = jQuery('#image-' + jlink.data('image-index'));

            ProductMediaManager.swapImage(target);
        });
    },

    initZoom: function() {
        ProductMediaManager.createZoom(jQuery(".gallery-image.visible")); //set zoom on first image
    },

    init: function() {
        ProductMediaManager.imageWrapper = jQuery('.product-img-box');

        // Re-initialize zoom on viewport size change since resizing causes problems with zoom and since smaller
        // viewport sizes shouldn't have zoom
        jQuery(window).on('delayed-resize', function(e, resizeEvent) {
            ProductMediaManager.initZoom();
        });

        ProductMediaManager.initZoom();

        ProductMediaManager.wireThumbnails();

        jQuery(document).trigger('product-media-loaded', ProductMediaManager);
    }
};
var PointerManager = {
    MOUSE_POINTER_TYPE: 'mouse',
    TOUCH_POINTER_TYPE: 'touch',
    POINTER_EVENT_TIMEOUT_MS: 500,
    standardTouch: false,
    touchDetectionEvent: null,
    lastTouchType: null,
    pointerTimeout: null,
    pointerEventLock: false,

    getPointerEventsSupported: function() {
        return this.standardTouch;
    },

    getPointerEventsInputTypes: function() {
        if (window.navigator.pointerEnabled) { //IE 11+
            //return string values from http://msdn.microsoft.com/en-us/library/windows/apps/hh466130.aspx
            return {
                MOUSE: 'mouse',
                TOUCH: 'touch',
                PEN: 'pen'
            };
        } else if (window.navigator.msPointerEnabled) { //IE 10
            //return numeric values from http://msdn.microsoft.com/en-us/library/windows/apps/hh466130.aspx
            return {
                MOUSE:  0x00000004,
                TOUCH:  0x00000002,
                PEN:    0x00000003
            };
        } else { //other browsers don't support pointer events
            return {}; //return empty object
        }
    },

    /**
     * If called before init(), get best guess of input pointer type
     * using Modernizr test.
     * If called after init(), get current pointer in use.
     */
    getPointer: function() {
        // On iOS devices, always default to touch, as this.lastTouchType will intermittently return 'mouse' if
        // multiple touches are triggered in rapid succession in Safari on iOS
        if(Modernizr.ios) {
            return this.TOUCH_POINTER_TYPE;
        }

        if(this.lastTouchType) {
            return this.lastTouchType;
        }

        return Modernizr.touch ? this.TOUCH_POINTER_TYPE : this.MOUSE_POINTER_TYPE;
    },

    setPointerEventLock: function() {
        this.pointerEventLock = true;
    },
    clearPointerEventLock: function() {
        this.pointerEventLock = false;
    },
    setPointerEventLockTimeout: function() {
        var that = this;

        if(this.pointerTimeout) {
            clearTimeout(this.pointerTimeout);
        }

        this.setPointerEventLock();
        this.pointerTimeout = setTimeout(function() { that.clearPointerEventLock(); }, this.POINTER_EVENT_TIMEOUT_MS);
    },

    triggerMouseEvent: function(originalEvent) {
        if(this.lastTouchType == this.MOUSE_POINTER_TYPE) {
            return; //prevent duplicate events
        }

        this.lastTouchType = this.MOUSE_POINTER_TYPE;
        jQuery(window).trigger('mouse-detected', originalEvent);
    },
    triggerTouchEvent: function(originalEvent) {
        if(this.lastTouchType == this.TOUCH_POINTER_TYPE) {
            return; //prevent duplicate events
        }

        this.lastTouchType = this.TOUCH_POINTER_TYPE;
        jQuery(window).trigger('touch-detected', originalEvent);
    },

    initEnv: function() {
        if (window.navigator.pointerEnabled) {
            this.standardTouch = true;
            this.touchDetectionEvent = 'pointermove';
        } else if (window.navigator.msPointerEnabled) {
            this.standardTouch = true;
            this.touchDetectionEvent = 'MSPointerMove';
        } else {
            this.touchDetectionEvent = 'touchstart';
        }
    },

    wirePointerDetection: function() {
        var that = this;

        if(this.standardTouch) { //standard-based touch events. Wire only one event.
            //detect pointer event
            jQuery(window).on(this.touchDetectionEvent, function(e) {
                switch(e.originalEvent.pointerType) {
                    case that.getPointerEventsInputTypes().MOUSE:
                        that.triggerMouseEvent(e);
                        break;
                    case that.getPointerEventsInputTypes().TOUCH:
                    case that.getPointerEventsInputTypes().PEN:
                        // intentionally group pen and touch together
                        that.triggerTouchEvent(e);
                        break;
                }
            });
        } else { //non-standard touch events. Wire touch and mouse competing events.
            //detect first touch
            jQuery(window).on(this.touchDetectionEvent, function(e) {
                if(that.pointerEventLock) {
                    return;
                }

                that.setPointerEventLockTimeout();
                that.triggerTouchEvent(e);
            });

            //detect mouse usage
            jQuery(document).on('mouseover', function(e) {
                if(that.pointerEventLock) {
                    return;
                }

                that.setPointerEventLockTimeout();
                that.triggerMouseEvent(e);
            });
        }
    },

    init: function() {
        this.initEnv();
        this.wirePointerDetection();
    }
};


$j(document).ready(function() {
    jQuery('.product-tab').hide();
    jQuery('.product-tab:eq(0)').show();
    jQuery('ul#product-tabs-menu li a').bind('click', function(e) {
        var _href = jQuery(this).attr('href'); 
        if (_href && _href != '#' && jQuery(_href).length == 1)
        {
            jQuery('ul#product-tabs-menu li a.active').removeClass('active');
            jQuery(this).addClass('active');
            jQuery('.product-tab').hide();
            jQuery(_href).show();
        } 
        e.preventDefault();
    }); 
});;