	$('document').ready(function(){
		$('.menu a').click(function(){
			$('.navigator').animate({right:0},'slow' )
		});
		
		$('.navigator p a').click(function(){
			$('.navigator').animate({right:'-320px'},'slow' )	
		});
	});