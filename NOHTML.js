/*	
	JS script to allow linear format of programming, similar to the command line in nature
	so beginners can focus less on html/css, and more on JS
	future versions will assist serious development as well
*/
var NOHTML = NOHTML || (function($){
	Object.size = function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) ++size;
	    }
	    return size;
	};
    "use strict";
	var Private = {};
	Private.wrapper = '#NOHTML_wrapper';
	Private.output = '#NOHTML_output';
	var Public = {};
	Public.start = function(title){
		$(document).ready(function(){
			//reset program onclick
			$(document).on('click', '#NOHTML_title', function(){ //onclick:
				$(Private.output).html('<h1>Output</h1>');
				$('input').val('');
				$('input').removeAttr('disabled');
			});
			//add starting HTML
			$('<div class="row text-center"></div>').prependTo(document.body);
			$('<div id="NOHTML_wrapper"class="span8"style="padding-right:20px; border-right: 1px solid #ccc;"><h1 id="NOHTML_title"style="cursor:pointer;">'+title+'</h1></div>').appendTo('.row'); //area for forms
			$('<div id="NOHTML_output"class="span4"><h1>Output</h1></div>').appendTo('.row'); //area for output
		});
	};
	//create any element with an object
	Public.create = function(what, obj){
		obj = obj || {};
		$(document).ready(function(){
			//expand the object into html
			$(Private.expand(what, obj)).appendTo(Private.wrapper);
		});
	};
	//expand JSON into an element
	Private.expand = function(what, obj){
		var element, type, classes, style, id, txt, options;
		//empty string if not set
		txt = obj.txt || '';
		type = obj.type || '';
		classes = obj.classes || '';
		style = obj.style || '';
		id = obj.id || '';
		options = obj.options || '';
		//split into common html components
		if(type !== '') type = 'type="'+type+'"';
		if(classes !==  '') classes = 'class="'+classes.join(' ')+'"';
		if(style !== '') style = 'style="'+style.join(';')+'"';
		if(id !== '') id = 'id="'+id+'"';
		element = '<'+what+' '+id+type+classes+style;
		//do unique tag handling
		if(what === 'input') element += 'placeholder="'+txt+'"value=""/>';
		else if(what === 'select'){
			var select;
			for(var i = 0; i < options.length; ++i) select += '<option>'+options[i]+'</option>';
			element += '>'+select+'</select>';
		}
		else element += '>'+txt+'</'+what+'>';
		return '<br />'+element+'<br />';
	};
	//expand JSON into a table or list
	Public.expand = function(what, obj){
		$(document).ready(function(){
			if(what === 'list'){
				var list = '<'+obj.type+' id="'+obj.id+'"class="list-group">';
				for(var i = 0; i < obj.items.length; ++i){
					list += '<li id="'+obj.ids[i]+'"class="list-group-item '+obj.classes[i]+'">'+obj.items[i]+'</li>';
				}
				list += '</ul>';
				$(Private.wrapper).append('<br />'+list+'<br />');
			}else if(what === 'table'){
				var table = '<table id="'+obj.id+'"class="table"><tr>';
				for(var i = 0; i < obj.headers.length; ++i) table += '<th>'+obj.headers[i]+'</th>';
				table += '</tr>';
				for(var i = 0; i < Object.size(obj.data); ++i){
					table += '<tr>';
					for(var j = 0; j < obj.data['row'+i].length; ++j){
						table += '<td>'+obj.data['row'+i][j]+'</td>';
					}
					table += '</tr>';
				}
				table += '</table>';
				$(Private.wrapper).append('<br />'+table+'<br />');
			}
		});
	};
	//input forms
	Public.input = function(id, prompt){
		$(document).ready(function(){
			//give a question, add an id, append to wrapper
			$('<br /><input type="text"placeholder="'+prompt+'"id="'+id+'"value=""/><br />').appendTo(Private.wrapper);
		});	
	};
	//select boxes
	Public.select = function(id, func){
		var select = '<select id="'+id+'">';
		for(var i = 2; i < arguments.length; ++i){
			select += '<option>'+arguments[i]+'</option>';
		}
		select += '</select>';
		$(document).ready(function(){
			$(document).on('change', '#'+id, function(){
				func();
			});
			$('<br />'+select+'<br />').appendTo(Private.wrapper);
		});
	};
	//for now, only changes text in a span
	Public.change = function(id, txt){
		$('#'+id).text(txt);
	};
	//for strings: 'hi #name' (in quotes)
	Public.printout = function(txt){
		$(document).ready(function(){
			$(Private.output).append('<br />'+txt+'<br />');
		});
	};
	Public.print = function(txt, id){
		id = id || '';
		$(document).ready(function(){
			$(Private.wrapper).append('<br /><span id="'+id+'">'+txt+'</span><br />');
		});
	};
	Public.remove = function(id){
		$(document).ready(function(){
			$('#'+id).fadeOut().remove(); //remove an element
		});
	};
	Public.disable = function(id){
		$(document).ready(function(){
			$('#'+id).attr('disabled', 'disabled');
		});
	};
	//"stuff" parameter does it all, use with _val to output the value of "stuff" onclick
	Public.button = function(id, txt, func){
		$(document).ready(function(){
			//create a button with text and append to wrapper
		$('<br /><button id="'+id+'">'+txt+'</button><br/>').appendTo(Private.wrapper);
			$(document).on('click', '#'+id, function(){ //onclick:
				func();
			});
		});
	};
	//for numbers
	Public.intval = function(id){
		return parseInt($('#'+id).val(), 10);
	};
	Public.floatval = function(id){
		return parseFloat($('#'+id).val(), 10);
	};
	Public.val = function(id){
		return $('#'+id).val();
	};
	Public.txt = function(id){
		return $('#'+id).text();
	};
	return Public;
})(jQuery);