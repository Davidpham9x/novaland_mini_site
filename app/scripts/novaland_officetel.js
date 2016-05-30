var novaland_officetel = window.novaland_officetel || {}; //global namespace for YOUR novaland_officetel, Please change novaland_officetel to your novaland_officetel name

(function($) {
    novaland_officetel.Global = {
        init: function() { //initialization code goes here
            $.support.cors = true;
            /*novaland_officetel.Global.initShowModalRegister();*/
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
		}
    };
})(jQuery);

$(document).ready(function($) {
    novaland_officetel.Global.init();
});