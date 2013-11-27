NOHTML
======

###What is NOHTML?
NOHTML is a framework created by uriahsanders that lets people use JavaScript to create HTML. It is taking the HTML out of HTML/CSS/JS. Its long term goal is to remove the CSS as well, so it's **only** JS.

It's making HTML and CSS using JavaScript, because some people just hate HTML and CSS.

###What does it do?
It let's you make graphical user interfaces using JavaScript! You can either use the default interface provided, or you can make your own. It's up to you!

###Why?
Because, some people don't want to be burdened by the hardships of carrying around all of that *useless* HTML and CSS knowledge that could be expressed in a simple couple line JavaScript program (made using NOHTML).

###But what if JavaScript is disabled?
Then this is not for you. This is for people who want to learn JavaScript and make shiny interfaces without having to worry about the horrors of learning more things.

###Hey... it's not working! It's broken!
Currently (sadly), it requires that you use jQuery. Please make sure to include that.

###But... but... how will I add this script without knowing HTML?
Use the code I'm about to give you:
```
<html>
<head>
    <meta charset="utf-8" />
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="NOHTML.js"></script>
    <script type="text/javascript" src="myNOHTMLsite.js"></script>
</head>
<body>
</body>
</html>
```
Note, that you have to make the myNOHTMLsite.js file yourself. You can change the file to be called whatever you like.

###Can I haz example?
Sure! There is a live example located in the source [here](http://uriahsanders.github.io/examples/graph.html).  
And here's the code for that example:
```
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
```
This is the NOHTML code.

###I ABSOLUTELY NEED TO EMAIL YOU <del>SPAM</del> ABOUT MY IDEA / SOMETHING / WHATEVER AND I HATE GITHUB AND DON'T WANT AN ACCOUNT!!!
First of all, there will be a 2 day delay because you hate GitHub. Secondly, email uriahsanders@ymail.com.
