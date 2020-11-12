
$(function(){

	$('.roulette').find('img').hover(function(){
		console.log($(this).height());
	});

	var p = {
		speed: 20,
		stopImageNumber: (Math.floor(Math.random() * 4) - 1),
		startCallback : function() {
			$('.start').attr('disabled', 'true');
			$('.stop').removeAttr('disabled');
		},
		slowDownCallback : function() {
			$('.stop').attr('disabled', 'true');
		},
		stopCallback : function($stopElm) {
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
		}

	}
	var rouletter = $('div.roulette');
	rouletter.roulette(p);	
	$('.stop').click(function(){
		var stopImageNumber = $('.stopImageNumber').val();
		if(stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');	
	});
	$('.stop').attr('disabled', 'true');
	$('.start').click(function(){
		var random = Math.floor(Math.random() * 4);
		p.stopImageNumber = random;
		rouletter.roulette('option', p);
		rouletter.roulette('start');	
	});
});

