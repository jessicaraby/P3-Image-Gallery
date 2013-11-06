// JavaScript Document

$(document).ready(function(){
	
	// Switch to Grid View
	$('#grid').click(function(){
		
		// 1. Hide Paragraphs
		$('p').hide();
		
		// 2. Remove exsisting class
		$('section').removeClass('col-md-6');
		
		// 3. Add new class
		
		$('section').addClass('col-md-3');
		
		
		});
	
	
		// Switch to List View
	$('#list').click(function(){
		
		// 1. Show Paragraphs
		$('p').show();
		
		// 2. Remove exsisting class
		$('section').removeClass('col-md-3');
		
		// 3. Add new class
		
		$('section').addClass('col-md-6');
		
		
		
		
		
		});
});