chromium-extension
==================

Fiddling with chromium extensions served over github to see if distribution via github is feasible or not.

UPDATE: Sun 02 Mar 2014:

Didn't think I'd be coming back to this repo. However, I'm going to see if I 
can get RequireJS working within Chromium and Firefox extensions without too 
much hassle (and see if I can figure out a way to compress the code into a 
single user.js file as well for continued greasemonkey support).

UPDATE: Sun 02 Mar 2014 2150:

Well, it is working, but it requires a XHR+eval hack to RequireJS' load() 
function:

https://groups.google.com/forum/#!msg/requirejs/elU_NYjunRw/ax-dWQHDskAJ

Sample project:

https://github.com/nonowarn/content-script-with-requirejs

This could have all sorts of subtle problems that I'm not experienced enough 
to watch out for or even realize are there.

UPDATE: Mon 10 Mar 2014 0126:

https://github.com/salsita/chrome-skeleton/

That. That right there. I like it. I like it a lot. Now, if only there were 
a simple but comprehensive use-case for... every other browser. Trying to make 
sense of Firefox's documentation is an increasingly aggravating excercise. 
There are years --well, techinically, DECADES-- of antiquated, deprecated, 
or otherwise irrelevant or incorrect cruft that makes getting your bearings 
on the project fucking impossible.
