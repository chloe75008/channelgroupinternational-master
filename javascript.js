$(document).ready(function(){

	(function($) {

		$('#nav-icon').click(function(e){

			e.preventDefault();
			$('body').toggleClass('with-sidebar');
		});

    $('#site-cache').click(function(e){
      $('body').removeClass('with-sidebar');
    });

	})(jQuery);


//CONTACT US
const FloatLabel = (() => {

  // add active class
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };

  // remove active class
  const handleBlur = (e) => {
    const target = e.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }
    target.removeAttribute('placeholder');
  };

  // register events
  const bindEvents = (element) => {
    const floatField = element.querySelector('input, textarea');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);
  };



  // get DOM elements
  const init = () => {
    const floatContainers = document.querySelectorAll('.float-container');

    floatContainers.forEach((element) => {

      if (element.querySelector('input, textarea').value) {
        element.classList.add('active');
      }



      bindEvents(element);
    });
  };

  return {
    init: init
  };
})();

FloatLabel.init();

});
