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
  var $placementboard = $('#placementboard'); //there board where the chip will fall from
  var $board = $('#board'); // the 7x6 visible board
  var $placement = $('#placement'); //the position where the chip will fall from
  var lowestChipPosition; //lowest available spot for a chip to fall down to in a column

  var isWon = function(takenPositionsArray){
    //horizontal test - starts with the left most test node [*, x, x, x]
    for (var i = 0; i<=42; i=i+7){ //for all of the columns
      for (var j=1; j <=4; j++){  //for all of the rows up until 4th column (since we are using left most test node)
        if (player == takenPositionsArray[i+j] && player == takenPositionsArray[i+j+1] && player == takenPositionsArray[i+j+2] && player == takenPositionsArray[i+j+3]){
          alert(player + " wins!");
          console.log(player +" wins!");
        }
      }
    }

    //vertical test - starts with the upper most test node
    for (var i = 0; i<=6; i++){ //for all of the columns
      for (var j=1; j <=21; j=j+7){  //for all of the rows up until the 3rd row 
        if (player == takenPositionsArray[i+j] && player == takenPositionsArray[i+j+7] && player == takenPositionsArray[i+j+14] && player == takenPositionsArray[i+j+21]){
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
      alert(player + " wins!");
      console.log(player +" wins!");
    }

    //diagonal test down to the right
      if ((player == takenPositionsArray[15] && player == takenPositionsArray[23] && player == takenPositionsArray[31] && player == takenPositionsArray[39]) || (player == takenPositionsArray[8] && player == takenPositionsArray[16] && player == takenPositionsArray[24] && player == takenPositionsArray[32]) || (player == takenPositionsArray[16] && player == takenPositionsArray[24] && player == takenPositionsArray[32] && player == takenPositionsArray[40]) || (player == takenPositionsArray[1] && player == takenPositionsArray[9] && player == takenPositionsArray[17] && player == takenPositionsArray[25]) || (player == takenPositionsArray[9] && player == takenPositionsArray[17] && player == takenPositionsArray[25] && player == takenPositionsArray[33]) ||
      (player == takenPositionsArray[17] && player == takenPositionsArray[25] && player == takenPositionsArray[33] && player == takenPositionsArray[41]) || (player == takenPositionsArray[2] && player == takenPositionsArray[10] && player == takenPositionsArray[18] && player == takenPositionsArray[26]) || (player == takenPositionsArray[10] && player == takenPositionsArray[18] && player == takenPositionsArray[26] && player == takenPositionsArray[34]) || (player == takenPositionsArray[18] && player == takenPositionsArray[26] && player == takenPositionsArray[34] && player == takenPositionsArray[42]) || (player == takenPositionsArray[3] && player == takenPositionsArray[11] && player == takenPositionsArray[19] && player == takenPositionsArray[27]) ||
      (player == takenPositionsArray[11] && player == takenPositionsArray[19] && player == takenPositionsArray[27] && player == takenPositionsArray[35]) || (player == takenPositionsArray[4] && player == takenPositionsArray[12] && player == takenPositionsArray[20] && player == takenPositionsArray[28]))
      {
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
    $(this).css("background-color", "thistle");
  }
  var placeChip = function(){
    $(this).css("background-color", "thistle");
    lowestpoint(player, $(this).attr("id"));
    isWon(takenPositionsArray);
    if((array[0].length==0)&&(array[1].length==0)&&(array[2].length==0)&&(array[3].length==0)&&(array[4].length==0)&&(array[5].length==0)&&(array[6].length==0)){
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

  //set event handler
  var ClearBoardFunction = function(){
    location.reload();
  }

  //set event listener
  $ClearBoardBtn.on("click", ClearBoardFunction);
})
