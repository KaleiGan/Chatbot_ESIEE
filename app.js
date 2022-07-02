(function ($){
	var $btnDemarrer = $('#btnDemarrer');
	var $results = $('#results');
	
	if ('webkitSpeechRecognition' in window)
	{
		var recognition = new webkitSpeechRecognition();
		recognition.lang = 'en-UK';
		recognition.continuous = false;
		recognition.interimResults = true;
		
		$btnDemarrer.click(function(e){
			e.preventDefault();
			$btnDemarrer.removeClass('btn-success');
			recognition.start();
		})

		recognition.onresult = function(event)
		{
			$results.text('');
			for(var i = event.resultIndex; i < event.results.length; i++)
			{
				var transcript = event.results[i][0].transcript;
				if(event.results[i].isFinal)
				{
					$results.text(transcript);
					recognition.stop();
					$btnDemarrer.addClass('btn-success');
					return true;
				}
				else
				{
					$results.text($results.text() + transcript);
				}
			}
			console.log(event);
		}
	}

	else
	{
		$btnDemarrer.hide();
	}
})(jQuery);