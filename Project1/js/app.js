

//console.log("javascript connected");
//console.log("type: $ in console to confirm jquery is defined");
console.log("Welcome to Connect-4!");
$(function(){

  // 50  51  52  53  54  55  56  <-- placementboard

  // [1   2   3   4   5   6   7] <-- board
  // [8   9  10  11  12  13  14]
  // [15 16  17  18  19  20  21]
  // [22 23  24  25  26  27  28]
  // [29 30  31  32  33  34  35]
  // [36 37  38  39  40  41  42]
  var array =[[1,8,15,22,29,36], [2,9,16,23,30,37], [3,10,17,24,31,38], [4,11,18,25,32,39], [5,12,19,26,33,40], [6,13,20,27,34,41], [7,14,21,28,35,42]]; //array of columns
  var takenPositionsArray = []; //array of taken positions
  var player = "red"; //red starts first; change to black
  var $placementboard = $('.placementboard'); //the board where the chip will fall from
  var $board = $('.board'); // the 7x6 visible board
  var $placement = $('#placement'); //the position where the chip will fall from
  var lowestChipPosition; //lowest available spot for a chip to fall down to in a column
  var counter =0;
  var countertwo = 0;

  function getRandomInt(min, max) { //random number inclusive
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var isWon = function(takenPositionsArray){
    //horizontal test - starts with the left most test node [*, x, x, x]
    for (var i = 0; i<=42; i=i+7){ //for all of the columns
      for (var j=1; j <=4; j++){  //for all of the rows up until 4th column (since we are using left most test node)
        if (player == takenPositionsArray[i+j] && player == takenPositionsArray[i+j+1] && player == takenPositionsArray[i+j+2] && player == takenPositionsArray[i+j+3]){
          document.getElementById('cube').style[prop] = null;
          alert(player + " wins!");
          console.log(player +" wins!");
        }
      }
    }

    //vertical test - starts with the upper most test node
    for (var i = 0; i<=6; i++){ //for all of the columns
      for (var j=1; j <=21; j=j+7){  //for all of the rows up until the 3rd row
        if (player == takenPositionsArray[i+j] && player == takenPositionsArray[i+j+7] && player == takenPositionsArray[i+j+14] && player == takenPositionsArray[i+j+21]){
          document.getElementById('cube').style[prop] = null;
          alert(player + " wins!");
          console.log(player +" wins!");
        }
      }
    }

    //diagonal test up to the right
    if ((player == takenPositionsArray[22] && player == takenPositionsArray[16] && player == takenPositionsArray[10] && player == takenPositionsArray[4]) ||
    (player == takenPositionsArray[29] && player == takenPositionsArray[23] && player == takenPositionsArray[17] && player == takenPositionsArray[11]) ||
    (player == takenPositionsArray[23] && player == takenPositionsArray[17] && player == takenPositionsArray[11] && player == takenPositionsArray[5]) ||
    (player == takenPositionsArray[36] && player == takenPositionsArray[30] && player == takenPositionsArray[24] && player == takenPositionsArray[18]) ||
    (player == takenPositionsArray[30] && player == takenPositionsArray[24] && player == takenPositionsArray[18] && player == takenPositionsArray[12]) ||
    (player == takenPositionsArray[24] && player == takenPositionsArray[18] && player == takenPositionsArray[12] && player == takenPositionsArray[6]) ||
    (player == takenPositionsArray[37] && player == takenPositionsArray[31] && player == takenPositionsArray[25] && player == takenPositionsArray[19]) ||
    (player == takenPositionsArray[31] && player == takenPositionsArray[25] && player == takenPositionsArray[19] && player == takenPositionsArray[13]) ||
    (player == takenPositionsArray[25] && player == takenPositionsArray[19] && player == takenPositionsArray[13] && player == takenPositionsArray[7]) ||
    (player == takenPositionsArray[38] && player == takenPositionsArray[32] && player == takenPositionsArray[26] && player == takenPositionsArray[20]) ||
    (player == takenPositionsArray[32] && player == takenPositionsArray[26] && player == takenPositionsArray[20] && player == takenPositionsArray[14]) ||
    (player == takenPositionsArray[39] && player == takenPositionsArray[33] && player == takenPositionsArray[27] && player == takenPositionsArray[21]))
    {
      document.getElementById('cube').style[prop] = null;
      alert(player + " wins!");
      console.log(player +" wins!");
    }

    //diagonal test down to the right
      if ((player == takenPositionsArray[15] && player == takenPositionsArray[23] && player == takenPositionsArray[31] && player == takenPositionsArray[39]) || (player == takenPositionsArray[8] && player == takenPositionsArray[16] && player == takenPositionsArray[24] && player == takenPositionsArray[32]) || (player == takenPositionsArray[16] && player == takenPositionsArray[24] && player == takenPositionsArray[32] && player == takenPositionsArray[40]) || (player == takenPositionsArray[1] && player == takenPositionsArray[9] && player == takenPositionsArray[17] && player == takenPositionsArray[25]) || (player == takenPositionsArray[9] && player == takenPositionsArray[17] && player == takenPositionsArray[25] && player == takenPositionsArray[33]) ||
      (player == takenPositionsArray[17] && player == takenPositionsArray[25] && player == takenPositionsArray[33] && player == takenPositionsArray[41]) || (player == takenPositionsArray[2] && player == takenPositionsArray[10] && player == takenPositionsArray[18] && player == takenPositionsArray[26]) || (player == takenPositionsArray[10] && player == takenPositionsArray[18] && player == takenPositionsArray[26] && player == takenPositionsArray[34]) || (player == takenPositionsArray[18] && player == takenPositionsArray[26] && player == takenPositionsArray[34] && player == takenPositionsArray[42]) || (player == takenPositionsArray[3] && player == takenPositionsArray[11] && player == takenPositionsArray[19] && player == takenPositionsArray[27]) ||
      (player == takenPositionsArray[11] && player == takenPositionsArray[19] && player == takenPositionsArray[27] && player == takenPositionsArray[35]) || (player == takenPositionsArray[4] && player == takenPositionsArray[12] && player == takenPositionsArray[20] && player == takenPositionsArray[28]))
      {
        document.getElementById('cube').style[prop] = null;
        alert(player + " wins!");
        console.log(player +" wins!");
      }
  }

  var lowestpoint = function(player, position){
    for (var j =0; j <7; j++){
      if (position==(50+j)){
        if (array[j].length==0){
          alert("nice try, but this row is obviously full, your turn is getting skipped");
        }
        else{
          takenPositionsArray[Math.max.apply(Math, array[j])]=player; //sets the position
        $(document.getElementById(Math.max.apply(Math, array[j]))).css("background-color", player);
        array[j].pop(); //removes the position from being available
        }
      }
    }
  }

  var showChip = function(){
    $(this).css("background-color", player);
  }
  var hideChip = function(){
    $(this).css("background-color", "rgba(50, 50, 50, 0.7)");
  }
  var placeChip = function(){
    $(this).css("background-color", "rgba(50, 50, 50, 0.7)");
    lowestpoint(player, $(this).attr("id"));
    isWon(takenPositionsArray);
    if((array[0].length==0)&&(array[1].length==0)&&(array[2].length==0)&&(array[3].length==0)&&(array[4].length==0)&&(array[5].length==0)&&(array[6].length==0)){
      document.getElementById('cube').style[prop] = null;
      alert("there are no more possible moves, the game is over");
    }
    if (player =="red"){
      player="black";
    }
    else if (player =="black"){
      player="red";
    }
      isWon(takenPositionsArray);
  }

  for (var i=50; i<57; i++){
    var $newPlacement = $('<div>').attr("class","placement").attr("id",[i]);
    $newPlacement.on('mouseenter', showChip);
    $newPlacement.on('mouseleave', hideChip);
    $newPlacement.on('click', placeChip);
    $placementboard.append($newPlacement);
  }

  for (var i=1; i<43; i++){
    var $newSquare = $('<div>').attr("class","square").attr("id",i);
    $newSquare.text(i); //woohoo - why arent the numbers showing in the board squares?
    //console.log($newSquare);
    $board.append($newSquare);
  }


  // Grab my element
  var $ClearBoardBtn = $('#ClearBoardBtn');
  var $DizzyBoardBtn = $('#DizzyBoardBtn');
  var $ColorRandomizerBoardBtn = $("#ColorRandomizerBoardBtn");
  var $InstructionsBtn = $("#InstructionsBtn");

  //set event handler
  var ClearBoardFunction = function(){
    location.reload();
  }
  var DizzyBoardFunction = function(){
    if (player =="red"){
      player="black";
    }
    else if (player =="black"){
      player="red";
    }
    if (counter%2==0){
      document.getElementById('cube').style[prop] = "rotateX("+(90+getRandomInt(0,360))+"deg) rotateY("+(90+getRandomInt(0,360))+"deg)";
      document.getElementById('DizzyBoardBtn').innerHTML='unDizzy';
    }
    else {
        document.getElementById('cube').style[prop] = null;
      //  document.getElementById('cube').style[prop] = "rotateX("+90+"deg) rotateY("+90+"deg)";
        document.getElementById('DizzyBoardBtn').innerHTML='Dizzy';
    }
    counter++;
  }
  var ColorRandomizerBoardFunction = function(){
    if (player =="red"){
      player="black";
    }
    else if (player =="black"){
      player="red";
    }
    if (countertwo%2==0){
        document.getElementById('ColorRandomizerBoardBtn').innerHTML='unColor Randomize';
        $(document.getElementById(getRandomInt(1,43))).css("background-color", "black");
        $(document.getElementById(getRandomInt(1,43))).css("background-color", "black");
        $(document.getElementById(getRandomInt(1,43))).css("background-color", "black");
        $(document.getElementById(getRandomInt(1,43))).css("background-color", "black");
        $(document.getElementById(getRandomInt(1,43))).css("background-color", "red");
        $(document.getElementById(getRandomInt(1,43))).css("background-color", "red");
        $(document.getElementById(getRandomInt(1,43))).css("background-color", "red");
        $(document.getElementById(getRandomInt(1,43))).css("background-color", "red");
    }
    else{
      for (var i=1; i<43; i++){
        $(document.getElementById(i)).css("background-color", "grey");
        $(document.getElementById(i)).css("background-color", takenPositionsArray[i]);
        document.getElementById('ColorRandomizerBoardBtn').innerHTML='Color Randomize';
      }
    }
    countertwo++;
  }

  var InstructionsFunction = function(){
    alert("               ***Extreme Connect 4 - Instructions***\nObjective: The objective of this game is to get four chips of the same color in a row (diagonally, vertically, or horizontally).  The first player to do so wins.\n\nHow to play: Players alternate turns, by clicking one of the seven positions towards the bottom of the screen.  Each position represents a corresponding column on the board.  The first player to obtain four in a row of their corresponding color wins.  In the unlikely event that the board is full without a winner, the game ends in a draw.\n\nExtreme Version: In this extreme variant of the classic game, a player may elect to forgo their turn by enabling/disabling the Dizzy or Color Randomizer feature.  Both of these features add visual complexity to the game but do not alter the actual positions of the chips in play.  Should a player attempt to place a chip in a full column, that players turn is skipped and they may be ridiculed.  Arrow keys may be used to reorient the board, but only after a player hails to the developer of this fun and mildly addictive game.");
  }


  //set event listener
  $ClearBoardBtn.on("click", ClearBoardFunction);
  $DizzyBoardBtn.on("click", DizzyBoardFunction);
  $ColorRandomizerBoardBtn.on("click", ColorRandomizerBoardFunction);
  $InstructionsBtn.on("click", InstructionsFunction);
})
