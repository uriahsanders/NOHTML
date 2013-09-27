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

~~~javascript

var _ = NOHTML; //use whatever prefix you'd like
_.start("My First Program!"); //name of your program, reset script onclick
_.print("Program to output your name and age, and check if you are over 18.");
_.input("Please enter your name.", 'name');
_.input("Please enter your age.", 'age');
_.button('mybutton', 'Compute', function(){
	if(_.val('age') > 18){
		_.printout("#name is over 18.");
	}else{
		_.printout("#name is under 18!");
	}
});

~~~~

Coming soon:
------------

Improving the script overall, as it originated as a little experiment, so it's pretty bad :P,  

Functions for getting "vals" of different datatypes,  

Live example,  

Option to use objects instead of function arguments for most methods,  

support for both classes and id's,  

support for more HTML (ul's, tables, etc.)

