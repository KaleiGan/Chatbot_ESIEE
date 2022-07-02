(function($){
	var $btnDemarrer = $('#btnDemarrer');
	if ('webkitSpeechRecognition' in window)
	{
		var recognition = new webkitSpeechRecognition();
		recognition.lang = 'fr-FR';
		recognition.continuous = false;
		recognition.interimResults = false;
		
		$btnDemarrer.click(function(e){
			e.preventDefault();
			recognition.start();
		})
	}
	else
	{
		
	}
})(jQuery);