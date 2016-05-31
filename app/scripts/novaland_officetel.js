var novaland_officetel = window.novaland_officetel || {}; //global namespace for YOUR novaland_officetel, Please change novaland_officetel to your novaland_officetel name

(function($) {
    novaland_officetel.Global = {
        init: function() { //initialization code goes here
            $.support.cors = true;
            this.initScrollTop();
            this.initTriggerScroll();
            novaland_officetel.Global.initShowModalRegister();

            //Checkbox Wrapper
            $('.radio-wrapper .input-checkbox').each(function() {
                if ($(this).is(':checked')) {
                    $(this).parents('.radio-wrapper').addClass('checked');
                }
            });

            $(document).on('click', '.radio-wrapper .input-checkbox', function() {

                if ($(this).is(':checked')) {
                    $(this).parents('.radio-wrapper').addClass('checked');
                } else if ($(this).not(':checked')) {
                    $(this).parents('.radio-wrapper').removeClass('checked');
                }
            });
        },

        initShowModalSuccessful: function() {
		    $.magnificPopup.open({
		        items: {
					type: 'inline',
					src: '#modal-successful',
					closeBtnInside: false
				}
		    });

		    $('#modal-successful').find('.button-close').off('click').on('click', function (e) {
                e.preventDefault();

                $.magnificPopup.close();
            });
		},

		initShowModalRegister: function() {
		    $.magnificPopup.open({
		        items: {
					type: 'inline',
					src: '#modal-register',
					closeBtnInside: false
				}
		    });

		    $('#modal-register').find('.button-close').off('click').on('click', function (e) {
                    e.preventDefault();

                    $.magnificPopup.close();
                });
		},

		initTriggerScroll: function () {
			var divContent = $('.introduce_projects'),
				ulContent = divContent.find('.list-projects'),
				liTags = ulContent.children('li');

			liTags.each(function () {
				var _this = $(this);

				_this.off('click').on('click', function () {
					if ( _this.index() == 0 ) {
						novaland_officetel.Global.initScroll( $('.introduce--rive-gate').offset().top );
					}

					if ( _this.index() == 1 ) {
						novaland_officetel.Global.initScroll( $('.introduce--sunrise-cityview').offset().top );
					}

					if ( _this.index() == 2 ) {
						novaland_officetel.Global.initScroll( $('.introduce--the-sun-avenue').offset().top );
					}
				});
			});
		},

		initScroll: function ( hTop ) {
			$("html, body").animate({ scrollTop: hTop });
		},

		initScrollTop: function () {
			var aTag = $('.lnk-back-to-top');

			aTag.off('click').on('click', function (e) {
				e.preventDefault();

				novaland_officetel.Global.initScroll( 0 );
			});
		}
    };
})(jQuery);

$(document).ready(function($) {
    novaland_officetel.Global.init();
});