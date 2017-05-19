Credit to Horton Consulting for javaScript inspiration.

CHANGELOG (Read from bottom to top):

20150519

GAME.JS: Literally re-wrote the entire game.js file during lunch and intentionally broke the code during testing.

Found the bug at 1740. Line 83 had "guess[i]" instead of "word[i]" which caused the onkey input to fail horribly. Thankfully that's out of the way. Now on to CSS modifications. Also, removed the "RESET" button because it's being a jerk and I don't want to deal with it right now.

20150518

GAME.JS: Sought assistance with the onkeyup function. I feel like it may be due to an error regarding the variables used within the game.js file. Not entirely sure, will continue to work on it.

20170516

GAME.JS: Attempted onkeyup functions with great failure. Spent about 2 hours working on this alone before calling it a night.

20170513

INDEX.HTML: Created skeleton and ported to Bootstrap as I want this to be responsive. Added header, three containers, and a footer.

STYLE.CSS: Began styling some elements such as the footer. It's not going anywhere so I may as well get it done now.

RESET.CSS: Created, applied, and forgot about.

GAME.JS: I pruned out everything until I had the skeleton of the framework, then began adding elements which I liked (such as the hints). I will be integrating on-key inputs rather than the on-screen keyboard that the original game featured.

Corrected some errors in the original framework such as missing semi-colons and strange invalidations. Found these in repl.it when porting over to troubleshoot logic.