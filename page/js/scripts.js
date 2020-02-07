$(function() {


	// *********************************** Sidebar
  $( "#sidebar" ).simplerSidebar( {
      align: 'left',
      init: 'closed',
      selectors: {
          trigger: ".sidebar-trigger",
          quitter: ".close-sidebar"
      }
  });
  // *********************************** Sidebar
	
	// *********************************** Modal
  	$("#modal-form").iziModal({
  		width: 450,
  		headerColor: '#826a45',
  	});
  	$("#modal-success").iziModal({
  		width: 350,
  		headerColor: '#826a45',
  		icon: 'icon-confirm',
  		padding: '40px 20px'
  	});
	// *********************************** Modal

	// *****************************************Mask input
    $('.tel-mask').mask("+7(999) 999-9999");
  // *****************************************Mask input
	
	// ***************************************** Form Submit
  $('form').submit(function (e) {
    let form_data = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "feedback.php",
        data: form_data,
        success: function () {
            $('form').trigger("reset");

            $('#modal-form').iziModal('close');

            setTimeout(function() {
            	$('#modal-success').iziModal('open');
            }, 1000);
        }
    });
    return false;
	});
	// ***************************************** Form Submit

	// ***************************************** Manager & Helper
	$('.manager').click(function() {
		$('.helper').toggleClass('active');
	})
	$('.helper__close').click(function() {
		$('.helper').removeClass('active');
	})
	// ***************************************** Manager & Helper
	
});
