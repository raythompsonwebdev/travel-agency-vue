/*-------------------------------------------------------------------------
 * RENDIFY - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)
	
-------------------------------------------------------------------------*/
"use strict";

jQuery(document).ready(function($){
	
	
/*------------------------------------------------------------------------*/
/*	1.	Plugins Init
/*------------------------------------------------------------------------*/


	/************** ToolTip *********************/

	function toolTipInit() {
	
		$('.menu li a').tooltip({
			placement: 'right'
		});
	}
	
	toolTipInit();




	/************** Open Different Pages *********************/
	$("nav li a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#leftside2 .content").hide();
		$("#leftside2 #menu-"+id[1]).slideDown(600);
		$("#leftside2 .homepage").hide();
		return false;
	});

	$("nav li a.homebutton").click(function(){
		$("#leftside2 .homepage").show();
		return false;
	});

	$("nav li .show-1").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-homepage.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$("nav li .show-2").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-about.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$("nav li .show-3").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-gallery.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$("nav li .show-4").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-services.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$("nav li .show-5").click(function(){
		loadScript();
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-contact.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});


	