Welcome to Connect-4

Author: Biren Jaspal, Date Developed: 3/25/2017
Version 1.0, Last Edited: 3/25/2017
There are no unresolved problems with this game.  

File Content and Structure: /index.html, /JS/app.js, /CSS/style.css
Installation Instructions: Simply copy these three files to a similar tree structure to your local computer or hosted site directory, and open up your webbrowser (Google Chrome v56 or higher recommended) to the index.html file

A live version of this game can be found at https://birenjaspal.github.io/

A description games origin and basic rules to the game can be found here: https://en.wikipedia.org/wiki/Connect_Four

This game makes use of HTML, CSS, JavaScript and jQuery

The approach to the applications development is as follows: When a position was selected (i.e., the mouse was clicked on a chip), a column was identified (from within an array of arrays), the lowest point on that column was then determined, the chip was inserted, and that position was identified as full (the position was removed from the array).  After each position was selected, a test was executed to see if the column was full, if all columns were full (hence the game was over in a draw), or if the game was won.  To test if the game was won, a test was done horizontally and vertically to see if there were four consecutive chips of the same color, diagonal tests were done for the 12 win case scenarios in each diagonal direction (down to the right or up to the right).  If a column was full and a player tried to put a chip in that position, a pop-up window indicates that this can not be done and the players turn would be skipped.  Pop-up windows are also used to alert of a winner or a draw.  The game may continue after a win (should, for example, the loser wish to see how long it would take for them to have won), but after each turn, a pop-up window will be displayed to indicate all possible winning scenarios.
