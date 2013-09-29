NOHTML
======

For writing quick JS scripts, and learning javascript without worrying about HTML/CSS

Requires:
---------

bootstrap.css 


jQuery

About
-----

Javascript is my favorite language, but sometimes it can be a pain to setup HTML and CSS for each and every single script that you write. Because
of this, I would often times find myself resorting to python to create small, quick scripts. However, I always enjoyed writing javascript more, and always missed running my scripts in the browser. Also, looking back, it may have been benificial to have been able to learn javascript without worrying about html.  


Because of this, I created NOHTML, so I could write smaller javascript scripts, without worrying about much other than javascript.
It doesn't do much, just sets up a page for you, that lets you write GUI programs similar to how you would write a CLI one. However, I plan to improve the script to make development in other areas easier as well. For the moment, it is excellent for learning, testing code ideas/concepts, and
writing small computational scripts.

Example:   
--------
  
Live example: http://uriahsanders.github.io/examples/NOHTML.html  

~~~javascript

var _ = NOHTML; //use whatever prefix you'd like
var equation = 'Equation: d = .5(Vi + Vf)t';
_.start("Physics program"); //this sets up a default environment for you, with wrapper & output
_.print("What would you like to solve for?");
_.print("(You must know at least 3 values)");
_.select('choice', 'std', function(){
	_.change('equation1', equation+'; Find: '+_.val('choice'));
}, 'Initial velocity', 'Final velocity', 'Displacement', 'Time');
_.print(equation, 'equation1');
_.input('vi', 'Initial velocity');
_.input('vf', 'Final velocity');
_.input('d', 'Displacement');
_.input('t', 'Time');
_.button('mybutton', 'Solve', function(){
	var answer;
	switch(_.val('choice')){
		case 'Displacement':
			answer = .5*(_.floatval('vi') + _.floatval('vf'))*_.floatval('t');
			break;
		case 'Initial velocity':
			answer = (_.floatval('d')/.5)/_.floatval('t') - _.floatval('vf');
			break;
		case 'Final velocity':
			answer = (_.floatval('d')/.5)/_.floatval('t') - _.floatval('vi');
			break;
		case 'Time':
			answer = _.floatval('d')/(.5*(_.floatval('vi') + _.floatval('vf')));
			break;
	}
	_.printout("Answer: "+_.val('choice')+' = '+answer);
});
_.end(); //save original state of code to reset on title click

~~~~

Coming soon:
------------

Improving the script overall, as it originated as a little experiment, so it's pretty bad :P,  

Docs

In closing:
-----------

Feel free to email me concerning NOHTML at uriahsanders@ymail.com :)

